import * as React from 'react';
import {
  View,
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
  Platform
} from 'react-native';
import AppText from 'components/AppText';
import styles from './MaterialDetail.styles';
import {Image, ListItem, Button} from '@rneui/themed';
import EnterInfoBox from 'components/EnterInfoBox';
import AppButton from 'components/AppButton';
import {useFormik} from 'formik';
import moment from 'moment';

import {NAMESPACE, MATERIAL_DETAIL_SCHEME} from './MaterialDetail.constants';
import {scalePortrait} from 'utils/responsive';

function MaterialDetailView({materialDetail, onPressSubmit}) {
  const {count, des, sample_image, last_import, note} = materialDetail;
  const {handleChange, touched, values, errors, handleSubmit} = useFormik({
    initialValues: {quantity: '', note: ''},
    validationSchema: MATERIAL_DETAIL_SCHEME,
    validateOnChange: false,
    onSubmit: onPressSubmit,
  });

  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const EnterInfoBoxRef = React.useRef(null);
  const _handleSubmit = React.useCallback(() => {
    handleSubmit();
    EnterInfoBoxRef?.current?.inputRef?.current.clear();
    console.log('EnterInfoBoxRef:', EnterInfoBoxRef.current);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
>
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
          <AppText>
            <AppText style={styles.countLabel}>{'Note: '}</AppText>
            {note}
          </AppText>
          <View style={styles.dropLine1} />
          <View style={styles.dropLine2} />

          <AppText bold small>
            {
              'From here are the necessary information to fill in when importing new goods'
            }
          </AppText>

          <EnterInfoBox
            label={'Quantity'}
            onChangeText={handleChange('quantity')}
            error={touched.quantity && errors.quantity}
            value={isSubmitted ? '' : values.quantity}
            messageError={errors.quantity}
            placeholder={'...'}
            keyboardType={'numeric'}
            ref={EnterInfoBoxRef}
          />

          <EnterInfoBox
            label={'Note'}
            onChangeText={handleChange('note')}
            error={touched.note && errors.note}
            value={isSubmitted ? '' : values.note}
            messageError={errors.note}
            placeholder={'...'}
            ref={EnterInfoBoxRef}
          />

          <AppButton title={'Submit'} onPress={_handleSubmit} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default React.memo(MaterialDetailView);
