import React, {useCallback} from 'react';
import {View, FlatList} from 'react-native';
import styles from './Home.styles';
import FuncItem from 'components/FuncItem';
import {CASHIER, DATA_ANALYTICS, STAFFS, WAREHOUSE} from 'assets/path';
import AppContainer from 'components/AppContainer';
// import {NAMESPACE} from './Home.constants';

function HomeView({idioms, onPressIdiomItem}) {
  return (
    <AppContainer>
      <View style={styles.container}>
        <View style={styles.row1}>
          <FuncItem label={'Staffs'} imageSource={STAFFS} />
          <FuncItem label={'Store'} imageSource={WAREHOUSE} />
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
