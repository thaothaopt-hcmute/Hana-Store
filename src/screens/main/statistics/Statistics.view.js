import * as React from 'react';
import {View, TouchableOpacity} from 'react-native';
import AppText from 'components/AppText';
import styles from './Statistics.styles';
// import {NAMESPACE} from './Statistics.constants';
import {BarChart} from 'react-native-chart-kit';
import {DEVICE_WIDTH} from 'constants/size';
import {scalePortrait} from 'utils/responsive';
import {COLOR_PRIMARY, COLOR_TEXT_PRIMARY} from 'constants/colors';
import AppButton from 'components/AppButton';
import NavigationServices from 'utils/navigationServices';
import SCREENS_NAME from 'constants/screensName';

function StatisticsView({statisticsData, onBarSelect}) {
  const data = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
    ],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 30, 20, 10, 50, 40],
      },
    ],
  };
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
      <AppText text={'Statistics'} />
      <BarChart
        // style={graphStyle}
        data={data}
        width={28 * 12}
        height={220}
        yAxisLabel="$"
        chartConfig={chartConfig}
        verticalLabelRotation={15}
        onPress={onBarSelect}
      />
      <TouchableOpacity
        style={styles.seeDetail}
        onPress={() => {
          NavigationServices.navigate(SCREENS_NAME.STATISTIC_DEATIL);
        }}>
        <AppText style={styles.seeDetailText}>See last month details</AppText>
      </TouchableOpacity>
    </View>
  );
}

export default React.memo(StatisticsView);
