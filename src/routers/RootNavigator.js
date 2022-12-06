import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import NavigationServices from 'utils/navigationServices';
import SCREENS_NAME from 'constants/screensName';
// Screen Import
import SavedIdiomsContainer from 'screens/main/savedIdioms/SavedIdioms.container';
import SearchContainer from 'screens/main/search/Search.container';
import CategoryContainer from 'screens/main/category/Category.container';
import DummyContainer from 'screens/main/dummy/Dummy.container';
import HomeContainer from 'screens/main/home/Home.container';
import SignInContainer from 'screens/auth/signIn/SignIn.container';
import GetStartContainer from 'screens/getStart/GetStart.container';
import {checkIsSelectedIdiomsSelector} from 'store/selectors/idiomsSelector';
import useSelectorShallow from 'hooks/useSelectorShallowEqual';
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
        <Stack.Screen
          name={SCREENS_NAME.SIGN_IN}
          options={{headerShown: false}}
          component={SignInContainer}
        />
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
