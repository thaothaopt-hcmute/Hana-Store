import * as React from 'react';
import {View, TouchableOpacity} from 'react-native';
import AppText from 'components/AppText';
import styles from './GetStart.styles';
import AppContainer from 'components/AppContainer';
import EnterInfoBox from 'components/EnterInfoBox';
import AppButton from 'components/AppButton';
import WorkingStaffs from 'components/WorkingStaffs';
import {USERS} from 'helpers/data/users';
// import {NAMESPACE} from './GetStart.constants';

function GetStartView({onPressLoginToStore}) {
  return (
    <AppContainer>
      <View style={styles.container}>
        <View>
          <EnterInfoBox label={'Staff ID'} placeholder={'Pxxxxxxx'} />
          <View style={styles.buttonRow}>
            <AppButton title={'Check in'} />
            <AppButton title={'Check out'} />
          </View>
        </View>
        <WorkingStaffs data={USERS} />
        <AppText>Vào quản lý</AppText>
        <AppButton title={'Login to Store'} onPress={onPressLoginToStore} />
      </View>
    </AppContainer>
  );
}

export default React.memo(GetStartView);
