import React, {useCallback, useLayoutEffect} from 'react';
import PosView from './Pos.view';
import {NAMESPACE} from './Pos.constants';
import {getString} from 'utils/i18n';
import NavigationServices from 'utils/navigationServices';
import SCREENS_NAME from 'constants/screensName';

export default function PosContainer({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: getString('checkinout'),
    });
  }, [navigation]);

  const onPressLoginToStore = useCallback(() => {
    NavigationServices.navigate(SCREENS_NAME.SIGN_IN);
  }, []);

  return (
    <PosView isLoading={false} onPressLoginToStore={onPressLoginToStore} />
  );
}
