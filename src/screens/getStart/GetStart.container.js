import React, {useLayoutEffect} from 'react';
import GetStartView from './GetStart.view';
import {NAMESPACE} from './GetStart.constants';
import {getString} from 'utils/i18n';

export default function GetStartContainer({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Hana Store',
    });
  }, [navigation]);

  return (
    <GetStartView />
  );
}
