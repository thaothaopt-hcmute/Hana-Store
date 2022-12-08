import * as React from 'react';
import {View} from 'react-native';
import AppText from 'components/AppText';
import styles from './StatisticDeatil.styles';
import {PieChart} from 'react-native-chart-kit';
import {STATISTICS} from 'helpers/data/statistics';
import { COLOR_PRIMARY, COLOR_TEXT_PRIMARY } from 'constants/colors';
import { scalePortrait } from 'utils/responsive';
import { DEVICE_WIDTH } from 'constants/size';

// import {NAMESPACE} from './StatisticDeatil.constants';

function StatisticDeatilView() {
  const chartConfig = {
    selectable: true,
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    decimalPlaces: scalePortrait(1), // optional, defaults to 2dp
    fillShadowGradientOpacity: 1,
    fillShadowGradient: COLOR_PRIMARY,
    inActiveFillShadowGradient: '#f7efeb',
    color: (opacity) => `rgba(226, 95, 34, ${opacity})`,
    labelColor: () => COLOR_TEXT_PRIMARY,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    propsForLabels: styles.chartText,
    
  };
  return (
    <View style={styles.container}>
      <PieChart
        data={STATISTICS[0].detail}
        width={DEVICE_WIDTH}
        height={300}
        chartConfig={chartConfig}
        accessor={'population'}
        backgroundColor={'transparent'}
        paddingLeft={'15'}
        center={[10, 0]}
        absolute
      />
    </View>
  );
}

export default React.memo(StatisticDeatilView);
