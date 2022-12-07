import * as React from 'react';
import {
  View,
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import AppText from 'components/AppText';
import styles from './MaterialDetail.styles';
import {Image, ListItem, Button} from '@rneui/themed';
import EnterInfoBox from 'components/EnterInfoBox';
import AppButton from 'components/AppButton';
import {useFormik} from 'formik';
import moment from 'moment';

import {NAMESPACE, MATERIAL_DETAIL_SCHEME} from './MaterialDetail.constants';
import { scalePortrait } from 'utils/responsive';

function MaterialDetailView({materialDetail, onPressSubmit}) {
  const {count, des, sample_image, last_import} = materialDetail;
  const {handleChange, touched, values, errors, handleSubmit} = useFormik({
    initialValues: {quantity: ''},
    validationSchema: MATERIAL_DETAIL_SCHEME,
    validateOnChange: false,
    onSubmit: onPressSubmit,
  });
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{uri: sample_image}}
        style={styles.image}
        PlaceholderContent={<ActivityIndicator />}
      />
      <View style={styles.detailInfoContainer}>
        <AppText>{des}</AppText>
        <AppText>
          <AppText style={styles.countLabel}>{'Count: '}</AppText>
          {count}
        </AppText>
        <AppText>
          <AppText style={styles.countLabel}>{'Last import: '}</AppText>
          {moment(last_import).startOf('hour').fromNow()}
        </AppText>
        <View style={styles.dropLine1} />
        <View style={styles.dropLine2} />

        <AppText>
          {
            'From here are the necessary information to fill in when importing new goods'
          }
        </AppText>
        <View style={styles.dropLine1} />
        
          <EnterInfoBox
            label={'Quantity'}
            onChangeText={handleChange('quantity')}
            error={touched.quantity && errors.quantity}
            value={values.quantity}
            messageError={errors.quantity}
            placeholder={'...'}
            keyboardType={'numeric'}
          />
       
        <AppButton title={'Submit'} onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
}

export default React.memo(MaterialDetailView);
