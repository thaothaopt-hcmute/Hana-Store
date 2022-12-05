
import React from 'react';
import styles from './styles';
import {View, ActivityIndicator} from 'react-native';
import AppText from 'components/AppText';
import {Image} from '@rneui/themed'


function AppImage({source, imageStyle}) {
  return (
    <View style={styles.container}>
       <Image
       source={{ uri: source }}
       containerStyle={[styles.item, imageStyle]}
       PlaceholderContent={<ActivityIndicator />}

       />
    </View>
  );
}

export default React.memo(AppImage);
