import * as React from 'react';
import {Alert, FlatList, View} from 'react-native';
import AppText from 'components/AppText';
import styles from './ListStaff.styles';
import SearchBox from 'components/SearchBox';
import NavigationServices from 'utils/navigationServices';
import SCREENS_NAME from 'constants/screensName';
import CardStaff from './components/CardStaff';
import {useSearchData} from 'hooks/useSearchData';
import {DEFAULT_PADDING_VERTICAL} from 'constants/size';
import {useActions} from 'hooks/useActions';
import {deActivateUser, deleteUser} from 'store/actions/dbRootActions';
import {USER_STATUS} from 'constants/appConstants';
// import {NAMESPACE} from './ListStaff.constants';

function ListStaffView({listStaff}) {
  const [searchText, setSearchText] = React.useState('');
  const actions = useActions({deActivateUser, deleteUser});
  const dataSearch = useSearchData(
    listStaff,
    searchText,
    (list, searchText) => {
      return list.filter(
        (e) =>
          e.id === searchText ||
          (e.first + ' ' + e.lastName).includes(searchText),
      );
    },
  );
  const onChangeText = (text) => {
    setSearchText(text);
  };

  const onPressDelete = (item) => {
    Alert.alert('Alert', 'Are you sure that you want to delete this item?', [
      {
        text: 'No',
        onPress: () => {},
      },
      {
        text: 'Yes',
        onPress: () => {
          actions.deleteUser({id: item.id});
        },
      },
    ]);
  };

  const onPressDeactivate = (item, currentStatus) => {
    Alert.alert(
      'Alert',
      `Are you sure that you want to ${
        currentStatus === USER_STATUS.ACTIVE ? 'deactivate' : 'active'
      } this item?`,
      [
        {
          text: 'No',
          onPress: () => {},
        },
        {
          text: 'Yes',
          onPress: () => {
            actions.deActivateUser({id: item.id, currentStatus});
          },
        },
      ],
    );
  };

  const renderItem = ({item}) => {
    return (
      <CardStaff
        onPressItem={(item) => {
          NavigationServices.navigate(SCREENS_NAME.USER_DETAIL, {item});
        }}
        item={item}
        onPressDelete={onPressDelete}
        onPressDisable={onPressDeactivate}
      />
    );
  };

  return (
    <View style={styles.container}>
      <AppText text={'ListStaff'} />
      <SearchBox value={searchText} onChangeText={onChangeText} />
      <FlatList
        contentContainerStyle={{paddingVertical: DEFAULT_PADDING_VERTICAL / 2}}
        data={dataSearch}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default React.memo(ListStaffView);
