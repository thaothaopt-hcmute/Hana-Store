import React, {useLayoutEffect} from 'react';
import UserDetailView from './UserDetail.view';
import {NAMESPACE} from './UserDetail.constants';
import {getString} from 'utils/i18n';
import { getParams } from 'utils/navigationServices';

export default function UserDetailContainer({navigation, route}) {
  const params = getParams(route);
  const {item} = params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: item?.firstName?.toLocaleUpperCase(),
    });
  }, [navigation]);

  return <UserDetailView userInfo={item}/>;
}
