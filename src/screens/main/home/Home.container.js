import React, {useLayoutEffect, useCallback} from 'react';
import HomeView from './Home.view';
import {NAMESPACE} from './Home.constants';
import {getString} from 'utils/i18n';
import useSelectorShallow from 'hooks/useSelectorShallowEqual';
import {getIdiomsSelector} from 'store/selectors/idiomsSelector';
import NavigationServices, {getParams} from 'utils/navigationServices';
import SCREENS_NAME from 'constants/screensName';
import {getUserInfoSelector} from 'store/selectors/authSelector';

export default function HomeContainer({navigation, route}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: getString(`${NAMESPACE}.title`),
    });
  }, [navigation]);
  const params = getParams(route);
  console.log('params::', route);
  const idioms = useSelectorShallow(getIdiomsSelector);
  const userInfo = useSelectorShallow(getUserInfoSelector);

  const onPressToWarehouse = useCallback(() => {
    NavigationServices.navigate(SCREENS_NAME.WAREHOUSE);
  }, []);

  return (
    <HomeView
      isLoading={false}
      idioms={idioms}
      onPressToWarehouse={onPressToWarehouse}
      userInfo={userInfo}
    />
  );
}
