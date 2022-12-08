import * as React from 'react';
import {View, TouchableOpacity} from 'react-native';
import AppText from 'components/AppText';
import styles from './GetStart.styles';
import AppContainer from 'components/AppContainer';
import EnterInfoBox from 'components/EnterInfoBox';
import AppButton from 'components/AppButton';
import WorkingStaffs from 'components/WorkingStaffs';
import {USERS} from 'helpers/data/users';
import {useSearchOne} from 'hooks/useSearchOne';
import {useSelector} from 'react-redux';
import {getListStaffSelector} from 'store/selectors/dbRootSelector';
// import {NAMESPACE} from './GetStart.constants';

function GetStartView({onPressLoginToStore}) {
  const listStaff = useSelector(getListStaffSelector);
  const [selectedItem, setSelectedItem] = React.useState();
  const [searchText, setSearchText] = React.useState('');
  // const [selectedItem] = useSearchOne(listStaff, searchText, (_data, text) => {
  //   return _data.find((e) => e.id === text);
  // });
  return (
    <AppContainer>
      <View style={styles.container}>
        <View>
          <EnterInfoBox
            value={searchText}
            onChangeText={setSearchText}
            label={'Staff ID'}
            placeholder={'Pxxxxxxx'}
          />
          <View style={styles.buttonRow}>
            <AppButton title={'Check in'} />
            <AppButton title={'Check out'} />
          </View>
        </View>
        <WorkingStaffs
          onPressItem={(item) => {
            if (selectedItem?.id === item.id) {
              setSelectedItem(undefined);
            } else {
              setSelectedItem(item);
            }
          }}
          selectedItem={selectedItem}
          data={USERS}
        />
        <AppText>Vào quản lý</AppText>
        <AppButton title={'Login to Store'} onPress={onPressLoginToStore} />
      </View>
    </AppContainer>
  );
}

export default React.memo(GetStartView);
