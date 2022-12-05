import React, {useLayoutEffect} from 'react';
import DummyView from './Dummy.view';
import {NAMESPACE} from './Dummy.constants';
import {getString} from 'utils/i18n';

export default function DummyContainer({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: getString(`${NAMESPACE}.title`),
    });
  }, [navigation]);

  return (
    <DummyView isLoading={false} />
  );
}
