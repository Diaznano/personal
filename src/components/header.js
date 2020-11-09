import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import colors from '../assets/colors';
import { arrowBack } from '../assets/images';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 55,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    color: colors.WHITE,
    textAlign: 'center',
  },
  icon: {
    width: 15,
    height: 15,
  },
  containerLeft: { flex: 0.8, alignItems: 'flex-start', paddingLeft: 10 },
  containerRigth: { flex: 0.8, alignItems: 'flex-end', paddingRight: 10 },
  containerCenter: { flex: 1.2, justifyContent: 'center' },
});

const Header = ({ title, showGoBackButton, navigation: { goBack }, renderRigthButton }) => {
  const renderBackButton = () => {
    return (
      <TouchableOpacity onPress={() => goBack()}>
        <Image source={arrowBack} style={styles.icon} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.containerLeft}>{showGoBackButton && renderBackButton()}</View>
        <View style={styles.containerCenter}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.containerRigth}>{renderRigthButton && renderRigthButton()}</View>
      </View>
    </SafeAreaView>
  );
};

Header.propTypes = {
  showGoBackButton: PropTypes.bool,
  title: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
  renderRigthButton: PropTypes.func,
};

Header.defaultProps = {
  showGoBackButton: false,
  renderRigthButton: null,
};

export default withNavigation(Header);
