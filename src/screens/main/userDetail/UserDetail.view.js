import * as React from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import AppText from 'components/AppText';
import styles from './UserDetail.styles';
// import {NAMESPACE} from './UserDetail.constants';
import {Avatar} from '@rneui/themed';
import {scale} from 'utils/responsive';
import {Icon} from '@rneui/base';

function UserDetailView() {
  return (
    <ScrollView style={styles.root}>
      <View style={styles.container}>
        <Avatar
          onPress={() => {
            console.warn('Click');
          }}
          size={scale(100)}
          rounded
          source={{uri: 'https://randomuser.me/api/portraits/men/36.jpg'}}>
          <TouchableOpacity style={styles.btnEdit}>
            <AppText>Edit</AppText>
          </TouchableOpacity>
        </Avatar>
      </View>
    </ScrollView>
  );
}

export default React.memo(UserDetailView);
