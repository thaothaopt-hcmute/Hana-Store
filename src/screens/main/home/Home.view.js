import React, {useCallback} from 'react';
import {View, FlatList} from 'react-native';
import AppText from 'components/AppText';
import styles from './Home.styles';
import IdiomItem from './component/IdiomItem';
// import {NAMESPACE} from './Home.constants';

function HomeView({idioms, onPressIdiomItem}) {
  const keyExtractor = useCallback(
    (item, index) => (item.id || index).toString(),
    [],
  );

  const renderItem = useCallback(({item, index}) => {
    return (
      <IdiomItem item={item} index={index} onPressItem={onPressIdiomItem} />
    );
  }, []);

  return (
    <View style={styles.container}>
      <AppText text={'HomeView'} />
      <FlatList
        data={idioms}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
}

export default React.memo(HomeView);
