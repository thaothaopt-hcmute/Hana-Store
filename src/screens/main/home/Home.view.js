import React, {useCallback} from 'react';
import {View, FlatList} from 'react-native';
import styles from './Home.styles';
import FuncItem from 'components/FuncItem';
import {CASHIER, DATA_ANALYTICS, STAFFS, WAREHOUSE} from 'assets/path';
import AppContainer from 'components/AppContainer';
import NavigationServices from 'utils/navigationServices';
import SCREENS_NAME from 'constants/screensName';
// import {NAMESPACE} from './Home.constants';

function HomeView({idioms, onPressIdiomItem, onPressToWarehouse}) {
  return (
    <AppContainer>
      <View style={styles.container}>
        <View style={styles.row1}>
          <FuncItem
            onPress={() => {
              NavigationServices.navigate(SCREENS_NAME.LIST_STAFF);
            }}
            label={'Staffs'}
            imageSource={STAFFS}
          />
          <FuncItem label={'Store'} imageSource={WAREHOUSE} onPress={onPressToWarehouse}/>
        </View>
        <View style={styles.row2}>
          <FuncItem label={'Statistics'} imageSource={DATA_ANALYTICS} />
          <FuncItem label={'POS'} imageSource={CASHIER} />
        </View>
      </View>
    </AppContainer>
  );
}

export default React.memo(HomeView);
