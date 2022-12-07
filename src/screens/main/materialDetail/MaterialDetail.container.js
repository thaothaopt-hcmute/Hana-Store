import React, {useCallback, useLayoutEffect} from 'react';
import MaterialDetailView from './MaterialDetail.view';
import {NAMESPACE} from './MaterialDetail.constants';
import {getString} from 'utils/i18n';
import {getParams} from 'utils/navigationServices';
import moment from 'moment';

export default function MaterialDetailContainer({navigation, route}) {
  const params = getParams(route);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: params.name.toLocaleUpperCase(),
    });
  }, [navigation]);
  const d = new Date();
  const time = d.getDay();

  console.log(
    'time: ',
    moment().utcOffset('+05:30').format('YYYY-MM-DD hh:mm:ss a'),
  );
  const onPressSubmit = useCallback((values) => {}, []);

  return (
    <MaterialDetailView materialDetail={params} onPressSubmit={onPressSubmit} />
  );
}
