import React from 'react';
import styles from './styles';
import {View} from 'react-native';
import AppText from 'components/AppText';
import {ListItem} from '@rneui/themed';
import AppButton from 'components/AppButton';
import {Avatar} from '@rneui/base';
import {scale} from 'utils/responsive';
import {STATUS} from 'constants/appConstants';

function CardStaff({item, onPressItem, onPressDelete, onPressDisable}) {
  const {firstName, staffID, avatar, status, lastName, role, dob, gender} =
    item;

  const _onPressItem = React.useCallback(() => {
    typeof onPressItem === 'function' && onPressItem(item);
  }, [item, onPressItem]);

  const _onPressDelete = React.useCallback(() => {
    typeof onPressDelete === 'function' && onPressDelete(item);
  }, [item, onPressDelete]);

  const _onPressDisable = React.useCallback(
    (currentStatus) => {
      typeof onPressDisable === 'function' &&
        onPressDisable(item, currentStatus);
    },
    [item, onPressDisable],
  );

  const isDeactivated = status === STATUS.DEACTIVATED;

  return (
    <ListItem.Swipeable
      onPress={_onPressItem}
      style={styles.container}
      rightContent={(reset) => (
        <View style={styles.wrapOption}>
          <AppButton
            title="Delete"
            onPress={() => {
              _onPressDelete();
              reset();
            }}
            style={styles.rightButton}
          />
        </View>
      )}
      leftContent={(reset) => (
        <View style={styles.wrapOption}>
          <AppButton
            title={isDeactivated ? 'Active' : 'Deactivate'}
            onPress={() => {
              _onPressDisable(status);
              reset();
            }}
            style={styles.leftButton}
          />
        </View>
      )}>
      <ListItem.Content>
        <View style={styles.content}>
          <Avatar
            size={scale(90)}
            {...{source: avatar ? {uri: avatar} : undefined}}
            title={firstName}
            containerStyle={{backgroundColor: 'grey'}}
          />
          <View style={styles.colRight}>
            <AppText style={styles.nameText}>
              {firstName + ' ' + lastName}
            </AppText>
            <AppText style={styles.countText}>Staff ID: {staffID}</AppText>
            <AppText style={styles.countText}>{`Role: ${role}`}</AppText>
            <AppText style={styles.countText}>{`DoB: ${dob}`}</AppText>
            <AppText style={styles.countText}>{`Gender: ${gender}`}</AppText>
          </View>
          {isDeactivated && (
            <View style={styles.wrapDeactivated}>
              <AppText style={styles.txtStatus}>{status}</AppText>
            </View>
          )}
        </View>
      </ListItem.Content>
    </ListItem.Swipeable>
  );
}

export default React.memo(CardStaff);
