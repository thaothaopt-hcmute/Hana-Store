import * as React from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import AppText from 'components/AppText';
import styles from './UserDetail.styles';
import {NAMESPACE, USER_DETAIL_SCHEME} from './UserDetail.constants';
import {Avatar} from '@rneui/themed';
import {scale} from 'utils/responsive';
import {Icon} from '@rneui/base';
import EnterInfoBox from 'components/EnterInfoBox';
import {useFormik} from 'formik';
import AppButton from 'components/AppButton';

function UserDetailView({onPressSubmit}) {
  const {handleChange, touched, values, errors, handleSubmit} = useFormik({
    initialValues: {fullname: '', dob:''},
    validationSchema: USER_DETAIL_SCHEME,
    validateOnChange: false,
    onSubmit: onPressSubmit,
  });
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
      <EnterInfoBox
          label={'Full name'}
          onChangeText={handleChange('quantity')}
          error={touched.fullname && errors.fullname}
          value={values.fullname}
          messageError={errors.fullname}
          placeholder={'...'}
        />
        <EnterInfoBox
          label={'Birthday'}
          onChangeText={handleChange('dob')}
          error={touched.dob && errors.dob}
          value={values.dob}
          messageError={errors.dob}
          placeholder={'...'}
        />

        <AppButton
        title={'Submit'}
        style={styles.button}
        onPress={handleSubmit}
        />
    </ScrollView>
  );
}

export default React.memo(UserDetailView);
