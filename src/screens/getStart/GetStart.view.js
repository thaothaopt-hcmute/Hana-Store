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
import {
  getListStaffSelector,
  getWorkSheetOfUserByDaySelector,
} from 'store/selectors/dbRootSelector';
import {useActions} from 'hooks/useActions';
import {checkInCheckOutWorkSheet} from 'store/actions/dbRootActions';
import moment from 'moment';
import {WORK_TYPE} from 'constants/appConstants';
// import {NAMESPACE} from './GetStart.constants';

function GetStartView({onPressLoginToStore}) {
  const actions = useActions({checkInCheckOutWorkSheet});
  const listStaff = useSelector(getListStaffSelector);
  const [selectedItem, setSelectedItem] = React.useState();
  const [searchText, setSearchText] = React.useState('');

  const [searchItem] = useSearchOne(listStaff, searchText, (_data, text) => {
    return _data.find((e) => e.id === text);
  });
  const workSheetOfUserToday = useSelector((state) =>
    getWorkSheetOfUserByDaySelector(
      state,
      searchItem?.id,
      moment().format('YYYY-MM-DD'),
    ),
  );

  const canCheckOut = React.useMemo(() => {
    const item = workSheetOfUserToday?.[workSheetOfUserToday?.length - 1 || 0];
    return item?.type === WORK_TYPE.CHECK_IN;
  }, [workSheetOfUserToday]);

  React.useEffect(() => {
    setSelectedItem(searchItem);
  }, [searchItem]);

  React.useEffect(() => {
    setSearchText(selectedItem?.id);
  }, [selectedItem]);

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
            <AppButton
              onPress={() => {
                actions.checkInCheckOutWorkSheet({
                  userId: searchItem.id,
                  isCheckIn: true,
                });
              }}
              disabled={!searchItem || canCheckOut}
              title={'Check in'}
            />
            <AppButton
              onPress={() => {
                actions.checkInCheckOutWorkSheet({
                  userId: searchItem.id,
                  isCheckIn: false,
                });
              }}
              title={'Check out'}
              disabled={!canCheckOut}
            />
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
