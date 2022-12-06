import React, {useCallback, useLayoutEffect} from 'react';
import GetStartView from './GetStart.view';
import {NAMESPACE} from './GetStart.constants';
import {getString} from 'utils/i18n';
import NavigationServices from 'utils/navigationServices';
import SCREENS_NAME from 'constants/screensName';

export default function GetStartContainer({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: getString(`${NAMESPACE}.title`),
    });
  }, [navigation]);

  const onPressLoginToStore = useCallback(() => {
    NavigationServices.navigate(SCREENS_NAME.SIGN_IN);
  }, []);

  return (
    <GetStartView isLoading={false} onPressLoginToStore={onPressLoginToStore} />
  );
}
