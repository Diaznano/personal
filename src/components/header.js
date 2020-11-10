import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { MenuOption, Menu, MenuTrigger, MenuOptions } from 'react-native-popup-menu';
import colors from '../assets/colors';
import { arrowBack, logoutIcon, optionsIcon } from '../assets/images';
import navigationService from '../helpers/navigationService';

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
  optionIcon: {
    width: 20,
    height: 20,
    tintColor: '#B2C7D4',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  iconOptions: {
    width: 30,
    height: 30,
    tintColor: 'rgba(255, 255, 255, 0.7)',
  },
  containerLeft: { flex: 0.8, alignItems: 'flex-start', paddingLeft: 10 },
  containerRigth: { flex: 0.8, alignItems: 'flex-end', paddingRight: 10 },
  containerCenter: { flex: 1.2, justifyContent: 'center' },
});

const Header = ({ title, showGoBackButton, navigation: { goBack }, renderRigthButton, logOut }) => {
  const onPressLogout = () => {
    Alert.alert(
      'Log Out',
      'Are you sure you want to log out?',
      [
        {
          text: 'Cancelar',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            navigationService.navigateAndReset();
          },
        },
      ],
      { cancelable: false }
    );
  };

  const renderBackButton = () => {
    return (
      <TouchableOpacity onPress={() => goBack()}>
        <Image source={arrowBack} style={styles.icon} />
      </TouchableOpacity>
    );
  };

  const renderLogOut = () => {
    return (
      <Menu>
        <MenuTrigger>
          <Image style={styles.iconOptions} source={optionsIcon} />
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={{ marginTop: 35 }}>
          <MenuOption onSelect={onPressLogout}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image style={styles.optionIcon} source={logoutIcon} />
              <Text style={{ color: '#004571' }}>Log Out</Text>
            </View>
          </MenuOption>
        </MenuOptions>
      </Menu>
    );
  };

  const renderRigthOption = () => {
    if (logOut) {
      return renderLogOut();
    }
    if (renderRigthButton) {
      return renderRigthButton();
    }
    return <></>;
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.containerLeft}>{showGoBackButton && renderBackButton()}</View>
        <View style={styles.containerCenter}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.containerRigth}>{renderRigthOption()}</View>
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
  logOut: PropTypes.bool,
};

Header.defaultProps = {
  showGoBackButton: false,
  renderRigthButton: null,
  logOut: false,
};

export default withNavigation(Header);
