import React, {useCallback} from 'react';
import {View, FlatList} from 'react-native';
import styles from './Home.styles';
import FuncItem from 'components/FuncItem';
import {CASHIER, DATA_ANALYTICS, DISABLE_TEAM, STAFFS, WAREHOUSE} from 'assets/path';
import AppContainer from 'components/AppContainer';
import NavigationServices from 'utils/navigationServices';
import SCREENS_NAME from 'constants/screensName';
import {USER_ROLE} from 'constants/appConstants';
// import {NAMESPACE} from './Home.constants';

function HomeView({idioms, onPressIdiomItem, onPressToWarehouse, userInfo}) {
  return (
    <AppContainer>
      <View style={styles.container}>
        <View style={styles.row1}>
          {userInfo?.role === USER_ROLE.MANAGE ? (
            <FuncItem
              onPress={() => {
                NavigationServices.navigate(SCREENS_NAME.LIST_STAFF);
              }}
              label={'Staffs'}
              imageSource={STAFFS}
            />
          ) : (
            <View>
              <View style={styles.disableFuncView} />
              <FuncItem
                onPress={() => {
                  NavigationServices.navigate(SCREENS_NAME.LIST_STAFF);
                }}
                label={'Staffs'}
                imageSource={
                  userInfo?.role === USER_ROLE.MANAGE ? STAFFS : DISABLE_TEAM
                }
                disable={userInfo?.role !== USER_ROLE.MANAGE}
              />
            </View>
          )}
          <FuncItem
            label={'Store'}
            imageSource={WAREHOUSE}
            onPress={onPressToWarehouse}
          />
        </View>
        <View style={styles.row2}>
          <FuncItem
            label={'Statistics'}
            imageSource={DATA_ANALYTICS}
            onPress={() => {
              NavigationServices.navigate(SCREENS_NAME.STATISTICS);
            }}
          />
          {/* <FuncItem label={'POS'} imageSource={CASHIER} /> */}
        </View>
      </View>
    </AppContainer>
  );
}

export default React.memo(HomeView);
