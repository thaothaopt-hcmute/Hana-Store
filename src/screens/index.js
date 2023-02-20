import React, {useEffect, useState, useCallback} from 'react';
import {BackHandler} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import RootNavigator from 'routers/RootNavigator';
import {onAppConnectivityChange} from 'store/actions/connectActions';
import {useActions} from 'hooks/useActions';
import useSelectorShallow from 'hooks/useSelectorShallowEqual';
import {getIsLoadingSelector} from 'store/selectors/loadingSelector';
import {getIsConnectedSelector} from 'store/selectors/connectSelector';
import {hideError} from 'store/actions/alertActions';
import AppLoading from 'components/AppLoading';
import {getActiveRouteName} from 'utils/activeRouteName';
import SCREENS_NAME from 'constants/screensName';
import NavigationServices from 'utils/navigationServices';
import {useInitData} from 'hooks/useInitData';
// import I18n from 'utils/i18n';
// import ModalNotification, {
//   showNotification,
// } from 'components/Modal/ModalNotification';

export default function Screen() {
  const isConnected = useSelectorShallow(getIsConnectedSelector);
  const actions = useActions({onAppConnectivityChange, hideError});
  const [currentRouteName, setCurrentRouteName] = useState('');
  const isLoading = useSelectorShallow(getIsLoadingSelector);

  useInitData();

  const handleBackPress = useCallback(() => {

    if (isLoading) {
      return true;
    }
    switch (currentRouteName) {
      case SCREENS_NAME.HOME:
      case SCREENS_NAME.SIGN_IN:
      case '':
        // showNotification({
        //   hasCancel: true,
        //   title: I18n.t('alertExitApp.title'),
        //   message: I18n.t('alertExitApp.description'),
        //   textCancel: I18n.t('alertExitApp.cancel'),
        //   onPressConfirm: BackHandler.exitApp,
        // });
        console.log('Should handle BackHandler');
        break;
      case 'AnotherCase':
        // handler
        break;
      default:
        NavigationServices.goBack();
        break;
    }
    return true;
  }, [isLoading, currentRouteName]);

  const onNavigationStateChange = (action) => {
    // console.log('>>>>ACTION_NAVIGATOR:', {action});
    const routeName = getActiveRouteName(action);
    if (currentRouteName !== routeName) {
      setCurrentRouteName(routeName);
      // change the tracker here to use other Mobile analytics SDK.
    }
  };

  const netInfoListener = useCallback(
    (state) => {
      if (state.isConnected !== isConnected) {
        actions.onAppConnectivityChange(state.isConnected);
      }
    },
    [isConnected, actions],
  );

  // Subscribe net info
  useEffect(() => {
    const subscribeNetInfo = NetInfo.addEventListener(netInfoListener);
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );
    return () => {
      subscribeNetInfo();
      backHandler.remove();
    };
  }, [netInfoListener, handleBackPress]);

  return (
    <>
      <RootNavigator onNavigationStateChange={onNavigationStateChange} />
      {isLoading && <AppLoading />}
    </>
  );
}
