import React, {useLayoutEffect} from 'react';
import SavedIdiomsView from './SavedIdioms.view';
import {NAMESPACE} from './SavedIdioms.constants';
import {getString} from 'utils/i18n';

export default function SavedIdiomsContainer({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: getString(`${NAMESPACE}.title`),
    });
  }, [navigation]);

  return (
    <SavedIdiomsView isLoading={isLoading} />
  );
}
