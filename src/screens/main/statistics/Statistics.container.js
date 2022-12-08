import React, {useLayoutEffect, useCallback} from 'react';
import StatisticsView from './Statistics.view';
import {NAMESPACE} from './Statistics.constants';
import {getString} from 'utils/i18n';
import {STATISTICS} from 'helpers/data/statistics';
import NavigationServices from 'utils/navigationServices';
import SCREENS_NAME from 'constants/screensName';

export default function StatisticsContainer({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Statistic',
    });
  }, [navigation]);

  const onBarSelect = useCallback(()=>{
    NavigationServices.navigate(SCREENS_NAME.STATISTIC_DEATIL)
  },[])

  return <StatisticsView statisticsData={STATISTICS} onBarSelect={onBarSelect}/>;
}
