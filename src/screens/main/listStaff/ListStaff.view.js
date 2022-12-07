import * as React from 'react';
import {ScrollView, View} from 'react-native';
import AppText from 'components/AppText';
import styles from './ListStaff.styles';
import SearchBox from 'components/SearchBox';
import AppButton from 'components/AppButton';
import NavigationServices from 'utils/navigationServices';
import SCREENS_NAME from 'constants/screensName';
// import {NAMESPACE} from './ListStaff.constants';

function ListStaffView({onChangeText, listStaff}) {
  console.warn(listStaff);
  return (
    <View style={styles.container}>
      <AppText text={'ListStaff'} />
      <SearchBox onChangeText={onChangeText} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppButton
          onPress={() => {
            NavigationServices.navigate(SCREENS_NAME.USER_DETAIL);
          }}
          title={'Go to Detail'}></AppButton>
      </ScrollView>
    </View>
  );
}

export default React.memo(ListStaffView);
