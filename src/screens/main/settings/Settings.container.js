import React, {useLayoutEffect} from 'react';
import SettingsView from './Settings.view';
import {NAMESPACE} from './Settings.constants';
import {getString} from 'utils/i18n';

export default function SettingsContainer({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: getString(`${NAMESPACE}.title`),
    });
  }, [navigation]);

  return (
    <SettingsView isLoading={false} />
  );
}
