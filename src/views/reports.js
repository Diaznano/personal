import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, FlatList, Text, SafeAreaView, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { MaterialSelect, ExpenseForecastItem, MovementItem, Header } from '../components';
import { Errors, Report } from '../constants';
import {
  getExpensesByMonthsByCategoryAction,
  getExpensesForecastAction,
  getExpensesByMonthsByDayAction,
  getReportMovementsAction,
} from '../redux/reports/actions';

const styles = StyleSheet.create({
  container: { flex: 1, margin: 20 },
});

const Reports = ({
  actions: {
    getExpensesByMonthsByCategory,
    getExpensesByMonthsByDay,
    getExpensesForecast,
    getReportMovements,
  },
  fetchingExpensesForecast,
  expensesForecast,
  transactionsByFilter,
  fetchingTransactionsByFilter,
}) => {
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(Report.reportOptions[0]);
  const [selectedFilter, setSelectedFilter] = useState({});
  const [filters, setFilters] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (!fetchingExpensesForecast && expensesForecast) {
      setLoading(false);
    }
  }, [fetchingExpensesForecast, expensesForecast]);

  useEffect(() => {
    const filtersAux = transactionsByFilter.map((t) => {
      return { id: t.id, name: t.filter_text };
    });
    setFilters(filtersAux);
    setSelectedFilter(filtersAux[0]);
    setLoading(false);
  }, [transactionsByFilter]);

  useEffect(() => {
    const transactionFiltered = transactionsByFilter.find((e) => e.id === selectedFilter.id);
    if (transactionFiltered) {
      setTransactions(transactionFiltered.transactions);
    }
  }, [selectedFilter]);

  useEffect(() => {
    getExpensesForecast();
  }, []);

  const handleOnSelectOption = (item) => {
    setLoading(true);
    setSelected(item);
    switch (item.key) {
      case Report.reportTypes.EXPENSES_FORECAST:
        getExpensesForecast();
        break;
      case Report.reportTypes.EXPENSES_BY_MONTHS_BY_CATEGORY:
        getExpensesByMonthsByCategory();
        break;
      case Report.reportTypes.EXPENSES_BY_MONTHS_BY_DAY:
        getExpensesByMonthsByDay();
        break;
      case Report.reportTypes.MOVEMENTS:
        getReportMovements();
        break;
      default:
        break;
    }
  };

  const handleOnSelectFilter = (item) => {
    setSelectedFilter(item);
  };

  const renderExpenseForecastItem = (item) => <ExpenseForecastItem item={item} />;

  const renderTransactionItem = (item) => <MovementItem item={item} />;

  const keyExtractorExpenseForecast = (item) => `${item.id}`;

  const keyExtractorTransaction = (item) => `${item.id}`;

  const renderNoDataToDisplay = () => {
    return !fetchingExpensesForecast && !fetchingTransactionsByFilter ? (
      <Text>{Errors.empty}</Text>
    ) : null;
  };

  const renderList = () => {
    if (selected.key === Report.reportTypes.EXPENSES_FORECAST) {
      return (
        <FlatList
          data={expensesForecast}
          keyExtractor={(item) => keyExtractorExpenseForecast(item)}
          renderItem={({ item }) => renderExpenseForecastItem(item)}
          ListEmptyComponent={() => renderNoDataToDisplay()}
        />
      );
    }
    return (
      <FlatList
        data={transactions}
        keyExtractor={(item) => keyExtractorTransaction(item)}
        renderItem={({ item }) => renderTransactionItem(item)}
        ListEmptyComponent={() => renderNoDataToDisplay()}
      />
    );
  };

  const renderResults = () => {
    return (
      <>
        {!(
          selected.key === Report.reportTypes.EXPENSES_FORECAST ||
          selected.key === Report.reportTypes.MOVEMENTS
        ) &&
          filters.length > 0 && (
            <MaterialSelect
              data={filters}
              value={selectedFilter.name}
              onSelect={handleOnSelectFilter}
            />
          )}
        {renderList()}
      </>
    );
  };

  return (
    <>
      <Header title="Reports" logOut />
      <SafeAreaView style={styles.container}>
        <MaterialSelect
          data={Report.reportOptions}
          value={selected.name}
          onSelect={handleOnSelectOption}
        />
        {loading ? <ActivityIndicator /> : renderResults()}
      </SafeAreaView>
    </>
  );
};

Reports.propTypes = {
  actions: PropTypes.shape({
    getExpensesByMonthsByCategory: PropTypes.func,
    getExpensesByMonthsByDay: PropTypes.func,
    getExpensesForecast: PropTypes.func,
    getReportMovements: PropTypes.func,
  }).isRequired,
  fetchingExpensesForecast: PropTypes.bool.isRequired,
  expensesForecast: PropTypes.array.isRequired,
  transactionsByFilter: PropTypes.array.isRequired,
  fetchingTransactionsByFilter: PropTypes.bool.isRequired,
};

const mapStoreToProps = (store) => ({
  expensesForecast: store.reportsReducer.expensesForecast,
  transactionsByFilter: store.reportsReducer.transactionsByFilter,
  fetchingExpensesForecast: store.reportsReducer.fetchingExpensesForecast,
  fetchingTransactionsByFilter: store.reportsReducer.fetchingTransactionsByFilter,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      getExpensesByMonthsByCategory: getExpensesByMonthsByCategoryAction,
      getExpensesForecast: getExpensesForecastAction,
      getExpensesByMonthsByDay: getExpensesByMonthsByDayAction,
      getReportMovements: getReportMovementsAction,
    },
    dispatch
  ),
});

export default connect(mapStoreToProps, mapDispatchToProps)(Reports);
