import * as React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import NavigationServices from 'utils/navigationServices';
import SCREENS_NAME from 'constants/screensName';
// Screen Import
import AddNewMaterialContainer from 'screens/main/addNewMaterial/AddNewMaterial.container';
import StatisticDeatilContainer from 'screens/main/statisticDeatil/StatisticDeatil.container';
import StatisticsContainer from 'screens/main/statistics/Statistics.container';
import MaterialDetailContainer from 'screens/main/materialDetail/MaterialDetail.container';
import WarehouseContainer from 'screens/main/warehouse/Warehouse.container';
import UserDetailContainer from 'screens/main/userDetail/UserDetail.container';
import ListStaffContainer from 'screens/main/listStaff/ListStaff.container';
import SavedIdiomsContainer from 'screens/main/savedIdioms/SavedIdioms.container';
import SearchContainer from 'screens/main/search/Search.container';
import CategoryContainer from 'screens/main/category/Category.container';
import DummyContainer from 'screens/main/dummy/Dummy.container';
import HomeContainer from 'screens/main/home/Home.container';
import SignInContainer from 'screens/auth/signIn/SignIn.container';
import GetStartContainer from 'screens/getStart/GetStart.container';
import {checkIsSelectedIdiomsSelector} from 'store/selectors/idiomsSelector';
import useSelectorShallow from 'hooks/useSelectorShallowEqual';
import AppButton from 'components/AppButton';
import { FONT_FAMILY, FONT_SIZE } from 'constants/appFonts';
import { DEFAULT_PADDING_HORIZONTAL } from 'constants/size';
const Stack = createStackNavigator();

function RootNavigator({onNavigationStateChange}) {
  const isSelectedIdioms = useSelectorShallow(checkIsSelectedIdiomsSelector);

  return (
    <NavigationContainer
      onStateChange={onNavigationStateChange}
      ref={(navigatorRef) => {
        NavigationServices.setTopLevelNavigator(navigatorRef);
      }}>
      <Stack.Navigator
        screenOptions={{
          headerBackTitle: null,
          headerTitleAlign: 'center',
          headerTruncatedBackTitle: null,
          ...TransitionPresets.SlideFromRightIOS,
        }}
        // initialRouteName={
        //   isSelectedIdioms ? SCREENS_NAME.HOME : SCREENS_NAME.CATEGORY
        // }
        initialRouteName={SCREENS_NAME.GET_START}>
        {__DEV__ && (
          <Stack.Screen name={SCREENS_NAME.DUMMY} component={DummyContainer} />
        )}
        {/* Plop screen */}
        <Stack.Screen
          name={SCREENS_NAME.ADD_NEW_MATERIAL}
          component={AddNewMaterialContainer}
        />
        <Stack.Screen
          name={SCREENS_NAME.STATISTIC_DEATIL}
          component={StatisticDeatilContainer}
        />
        <Stack.Screen
          name={SCREENS_NAME.STATISTICS}
          component={StatisticsContainer}
        />
        <Stack.Screen
          name={SCREENS_NAME.MATERIAL_DETAIL}
          component={MaterialDetailContainer}
        />
        <Stack.Screen
          name={SCREENS_NAME.WAREHOUSE}
          options={{
            headerRight: () => (
              <Text
              style={{
                fontSize: FONT_SIZE.FIT,
                fontFamily: FONT_FAMILY.BOLD,
                paddingHorizontal: DEFAULT_PADDING_HORIZONTAL
              }}
                onPress={() =>
                  NavigationServices.navigate(SCREENS_NAME.ADD_NEW_MATERIAL)
                }>
                Add
              </Text>
            ),
          }}
          component={WarehouseContainer}
        />
        <Stack.Screen
          name={SCREENS_NAME.USER_DETAIL}
          component={UserDetailContainer}
        />
        <Stack.Screen
          name={SCREENS_NAME.LIST_STAFF}
          component={ListStaffContainer}
        />
        <Stack.Screen
          name={SCREENS_NAME.SAVED_IDIOMS}
          component={SavedIdiomsContainer}
        />
        <Stack.Screen name={SCREENS_NAME.SEARCH} component={SearchContainer} />
        <Stack.Screen
          name={SCREENS_NAME.CATEGORY}
          component={CategoryContainer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SCREENS_NAME.HOME}
          component={HomeContainer}
          options={{headerShown: false}}
        />
        <Stack.Screen name={SCREENS_NAME.SIGN_IN} component={SignInContainer} />
        {/* <Stack.Screen
          options={{headerShown: false}}
          name={SCREENS_NAME.MAIN}
          component={MainTabNavigator}
        /> */}
        <Stack.Screen
          options={{headerShown: false}}
          name={SCREENS_NAME.GET_START}
          component={GetStartContainer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
