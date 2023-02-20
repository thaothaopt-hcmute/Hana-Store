import * as React from 'react';
import {View, TouchableOpacity} from 'react-native';
import AppText from 'components/AppText';
import styles from './Pos.styles';
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
import { getString } from 'utils/i18n';
// import {NAMESPACE} from './GetStart.constants';

function PosView({onPressLoginToStore}) {
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

  const findLetter=()=>{
    let stringS = 'Find first letter';
    let letter = '';
    stringS.trim();
    for(let i= 0;i<stringS.length-1;i++){
        for(let j=i+1; j<stringS.length; j++){
            if(i===j){
                letter=i;
            }
        }
    }
}

  return (
    <AppContainer>
      <View style={styles.container}>
        <View>
          <EnterInfoBox
            value={searchText}
            onChangeText={setSearchText}
            label={getString('staffID')}
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
              title={getString('checkin')}
            />
            <AppButton
              onPress={findLetter}
              title={getString('checkout')}
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
        {/* <AppText>Vào quản lý</AppText>
        <AppButton title={getString('loginToStore')} onPress={onPressLoginToStore} /> */}
      </View>
    </AppContainer>
  );
}

export default React.memo(PosView);