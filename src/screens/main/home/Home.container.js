import React, {useLayoutEffect} from 'react';
import HomeView from './Home.view';
import {NAMESPACE} from './Home.constants';
import {getString} from 'utils/i18n';
import useSelectorShallow from 'hooks/useSelectorShallowEqual';
import {getIdiomsSelector} from 'store/selectors/idiomsSelector';

export default function HomeContainer({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: getString(`${NAMESPACE}.title`),
    });
  }, [navigation]);

  const idioms = useSelectorShallow(getIdiomsSelector);

  return <HomeView isLoading={false} idioms={idioms} />;
}
