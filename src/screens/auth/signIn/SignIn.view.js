import {LOGO_DEFAULT} from 'assets/path';
import AppButton from 'components/AppButton';
import AppContainer from 'components/AppContainer';
import AppText from 'components/AppText';
import EnterInfoBox from 'components/EnterInfoBox';
import * as React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './SignIn.styles';
import {useFormik} from 'formik';
import {SIGNIN_FORM_SCHEME} from './SignIn.constants';
import AppHeader from 'components/AppHeader';

function SignInView({onPressSubmit, onPressLeft}) {
  const {handleChange, touched, values, errors, handleSubmit} = useFormik({
    initialValues: {staffID: 'P1234501'},
    validationSchema: SIGNIN_FORM_SCHEME,
    validateOnChange: false,
    onSubmit: onPressSubmit,
  });
  return (
    <AppContainer>
      <View style={styles.container}>
        <Image source={LOGO_DEFAULT} style={styles.logoImage} />
        <View style={styles.signinBox}>
          <AppText style={styles.helloText} large bold>
            Hello
          </AppText>
          <AppText style={styles.signintoText}>Sign into your Account</AppText>
          <EnterInfoBox
            label={'Staff ID'}
            onChangeText={handleChange('staffID')}
            error={touched.staffID && errors.staffID}
            value={values.staffID}
            messageError={errors.staffID}
            placeholder={'Pxxxxxxx'}
          />
          <AppButton
            title={'Login'}
            style={styles.button}
            onPress={handleSubmit}
          />
          <AppText style={styles.noAccountWarnText}>
            *If you don't have account, please contact your Manager
          </AppText>
        </View>
      </View>
    </AppContainer>
  );
}

export default React.memo(SignInView);
