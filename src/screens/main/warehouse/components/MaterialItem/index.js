import React from 'react';
import styles from './styles';
import {View, ActivityIndicator} from 'react-native';
import AppText from 'components/AppText';
import {Image, ListItem, Button} from '@rneui/themed';
import AppButton from 'components/AppButton';

function MaterialItem({item, onPressItem, onPressDelete, onPressDisable}) {
  const {name, count, sample_image, des} = item;

  const _onPressItem = React.useCallback(() => {
    typeof onPressItem === 'function' && onPressItem(item);
  }, [item, onPressItem]);

  const _onPressDelete = React.useCallback(() => {
    typeof onPressDelete === 'function' && onPressDelete(item);
  }, [item, onPressDelete]);

  const _onPressDisable = React.useCallback(() => {
    typeof onPressDisable === 'function' && onPressDisable(item);
  }, [item, onPressDisable]);

  return (
    <ListItem.Swipeable
      onPress={_onPressItem}
      style={styles.container}
      rightContent={(reset) => (
        <AppButton
          title="Delete"
          onPress={() => {
            _onPressDelete();
            reset();
          }}
          style={styles.rightButton}
        />
      )}
      leftContent={(reset) => (
        <AppButton
          title="Disable"
          onPress={() => {
            _onPressDisable();
            reset();
          }}
          style={styles.leftButton}
        />
      )}>
      <ListItem.Content>
        <View style={styles.content}>
          <Image
            source={{uri: sample_image}}
            containerStyle={styles.image}
            PlaceholderContent={<ActivityIndicator />}
          />
          <View style={styles.colRight}>
            <AppText style={styles.nameText}>{name}</AppText>
            <AppText style={styles.countText}>{`Quantity: ${count}`}</AppText>
            <AppText style={styles.desText}>{des}</AppText>
          </View>
        </View>
      </ListItem.Content>
    </ListItem.Swipeable>
  );
}

export default React.memo(MaterialItem);
