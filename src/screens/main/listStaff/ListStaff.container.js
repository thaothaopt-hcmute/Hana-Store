import React, {useLayoutEffect, useCallback} from 'react';
import ListStaffView from './ListStaff.view';
import {NAMESPACE} from './ListStaff.constants';
import {getString} from 'utils/i18n';
import {useSelector} from 'react-redux';
import {getListStaffSelector} from 'store/selectors/dbRootSelector';

export default function ListStaffContainer({navigation}) {
  const listStaff = useSelector(getListStaffSelector);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: getString('listStaff'),
    });
  }, [navigation]);

  return <ListStaffView listStaff={listStaff} />;
}
