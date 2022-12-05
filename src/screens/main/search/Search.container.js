import React, {useLayoutEffect} from 'react';
import SearchView from './Search.view';
import {NAMESPACE} from './Search.constants';
import {getString} from 'utils/i18n';

export default function SearchContainer({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: getString(`${NAMESPACE}.title`),
    });
  }, [navigation]);

  return (
    <SearchView isLoading={isLoading} />
  );
}
