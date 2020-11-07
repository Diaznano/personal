import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import colors from '../assets/colors';
import { arrowBack } from '../assets/images';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 69,
    justifyContent: 'center',
    alignItems: 'center',
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
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    height: 69,
    width: 50,
    top: 0,
    left: 0,
  },
});

const Header = ({ title, showGoBackButton, navigation: { goBack }, renderRigthButton }) => {
  const renderBackButton = () => {
    return (
      <TouchableOpacity onPress={() => goBack()} style={styles.iconContainer}>
        <Image source={arrowBack} style={styles.icon} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {showGoBackButton && renderBackButton()}
        <Text style={styles.title}>{title}</Text>
        {renderRigthButton && renderRigthButton()}
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
  renderRigthButton: PropTypes.element,
};

Header.defaultProps = {
  showGoBackButton: false,
  renderRigthButton: null,
};

export default withNavigation(Header);
