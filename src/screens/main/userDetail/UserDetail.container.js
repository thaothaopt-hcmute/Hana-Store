import React, {useLayoutEffect} from 'react';
import UserDetailView from './UserDetail.view';
import {NAMESPACE} from './UserDetail.constants';
import {getString} from 'utils/i18n';

export default function UserDetailContainer({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: getString(`${NAMESPACE}.title`),
    });
  }, [navigation]);

  return <UserDetailView />;
}
