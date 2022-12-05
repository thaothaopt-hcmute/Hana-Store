import React, {useCallback} from 'react';
import {FlatList, View} from 'react-native';
import styles from './Category.styles';
import AppButton from 'components/AppButton';
import CategoryItem from './components/CategoryItem';
// Like that:
import AppAdMobBanner from 'components/AppAdMobBanner';
// import {NAMESPACE} from './Category.constants';

function CategoryView({categories, onPressCategoryItem, onPressContinue}) {
  const keyExtractor = useCallback(
    (item, index) => (item.id || index).toString(),
    [],
  );
  const renderItem = useCallback(
    ({item, index}) => {
      return (
        <CategoryItem item={item} index={index} onPress={onPressCategoryItem} />
      );
    },
    [onPressCategoryItem],
  );
  return (
    <View style={styles.container}>
      <AppAdMobBanner/>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={2}
        contentContainerStyle={styles.flatList}
      />

      <AppButton
        title={'Tiếp tục'}
        style={styles.button}
        onPress={onPressContinue}
      />
      <AppAdMobBanner/>
    </View>
  );
}

export default React.memo(CategoryView);
