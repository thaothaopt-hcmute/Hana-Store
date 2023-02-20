import * as React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import AppText from 'components/AppText';
import styles from './GetStart.styles';
import AppButton from 'components/AppButton';
import NavigationServices from 'utils/navigationServices';
import SCREENS_NAME from 'constants/screensName';
import {getString} from 'utils/i18n';
import {LOGO_DEFAULT} from 'assets/path';
// import {NAMESPACE} from './Pos.constants';

function GetStartView() {
  const findLetter = () => {
    let stringS = 'tìmt kiếm ký tự đầu';
    let letter = '';
    stringS.split(' ').join('');
    for (let i = 0; i < stringS.length - 1; i++) {
      for (let j = i + 1; j < stringS.length; j++) {
        if (stringS[i] === stringS[j]) {
          letter = stringS[i];
        }
      }
    }
  };
  return (
    <View style={styles.container}>
      <Image source={LOGO_DEFAULT} style={styles.logoImage} />

      <View style={styles.footerButtons}>
        <AppText style={styles.welcomeText}>Welcome to Hana Store</AppText>
        <AppButton
          title={getString('checkinout')}
          onPress={() => NavigationServices.navigate(SCREENS_NAME.POS)}
        />

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            NavigationServices.navigate(SCREENS_NAME.SIGN_IN);
          }}>
          <AppText style={styles.loginButtonText}>
            {getString('loginToStore')}
          </AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default React.memo(GetStartView);
