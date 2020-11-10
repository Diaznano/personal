import React, { useEffect } from 'react';

import { Alert, FlatList, SafeAreaView, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { FloatButton, Header, ListItem } from '../components';
import { deleteCategoryAction, getCategoriesAction } from '../redux/category/actions';
import { showToast } from '../helpers';
import { Errors } from '../constants';

const styles = StyleSheet.create({
  container: { flex: 1, margin: 20 },
});

const Categories = ({
  navigation,
  navigation: { navigate },
  categories,
  fetchingCategories,
  actions: { getCategories, deleteCategory },
  error,
}) => {
  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (error) {
      showToast(error);
    }
  }, [error]);

  useEffect(() => {
    const navFocusListener = navigation.addListener('didFocus', async () => {
      getCategories();
    });
    return () => {
      navFocusListener.remove();
    };
  }, []);

  const handleDeleteCategory = (id) => {
    Alert.alert('Delete category', 'Are you sure?', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Ok',
        onPress: () => deleteCategory(id),
      },
    ]);
  };

  const keyExtractor = (item) => `${item.id}`;

  const handleEditCategory = (item) => {
    navigate('Category', { category: item, isNew: false });
  };

  const handleNewCategory = () => {
    navigate('Category', { isNew: true });
  };

  const renderItem = (item) => (
    <ListItem
      item={item}
      onPressDelete={() => handleDeleteCategory(item.id)}
      onPressEdit={() => handleEditCategory(item)}
    />
  );

  return (
    <>
      <Header title="Categories" logOut />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={categories}
          keyExtractor={(item) => keyExtractor(item)}
          renderItem={({ item }) => renderItem(item)}
          ListEmptyComponent={() => {
            return !fetchingCategories ? <Text>{Errors.empty}</Text> : null;
          }}
          refreshing={fetchingCategories}
          onRefresh={() => getCategories()}
        />
      </SafeAreaView>
      <FloatButton onPress={handleNewCategory} />
    </>
  );
};

Categories.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func, addListener: PropTypes.func }).isRequired,
  actions: PropTypes.shape({ getCategories: PropTypes.func, deleteCategory: PropTypes.func })
    .isRequired,
  categories: PropTypes.array,
  fetchingCategories: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

Categories.defaultProps = {
  categories: [],
  error: '',
};

const mapStoreToProps = (store) => ({
  categories: store.categoryReducer.categories,
  fetchingCategories: store.categoryReducer.fetchingCategories,
  successDeletingCategories: store.categoryReducer.successDeletingCategories,
  error: store.categoryReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      getCategories: getCategoriesAction,
      deleteCategory: deleteCategoryAction,
    },
    dispatch
  ),
});

export default connect(mapStoreToProps, mapDispatchToProps)(Categories);
