import React, {useLayoutEffect, useCallback} from 'react';
import HomeView from './Home.view';
import {NAMESPACE} from './Home.constants';
import {getString} from 'utils/i18n';
import useSelectorShallow from 'hooks/useSelectorShallowEqual';
import {getIdiomsSelector} from 'store/selectors/idiomsSelector';
import NavigationServices from 'utils/navigationServices';
import SCREENS_NAME from 'constants/screensName';

export default function HomeContainer({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: getString(`${NAMESPACE}.title`),
    });
  }, [navigation]);

  const idioms = useSelectorShallow(getIdiomsSelector);

  const onPressToWarehouse = useCallback(()=>{
    NavigationServices.navigate(SCREENS_NAME.WAREHOUSE)
  },[])

  return <HomeView isLoading={false} idioms={idioms} onPressToWarehouse={onPressToWarehouse}/>;
}
