import React, {useLayoutEffect} from 'react';
import StatisticDeatilView from './StatisticDeatil.view';
import {NAMESPACE} from './StatisticDeatil.constants';
import {getString} from 'utils/i18n';
import { STATISTICS } from 'helpers/data/statistics';

export default function StatisticDeatilContainer({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Statistic Detail - ${STATISTICS[0].month}`,
    });
  }, [navigation]);

  return (
    <StatisticDeatilView  />
  );
}
