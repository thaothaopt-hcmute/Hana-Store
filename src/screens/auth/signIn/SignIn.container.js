import React, {useLayoutEffect, useCallback} from 'react';
import SignInView from './SignIn.view';
import {NAMESPACE} from './SignIn.constants';
import NavigationServices from 'utils/navigationServices';
import SCREENS_NAME from 'constants/screensName';

export default function SignInContainer({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Sign In',
    });
  }, [navigation]);

  const [username, onChangeText] = React.useState('Useless Text');

  const onPressSubmit = useCallback((values) => {
    // actions.signInSubmit({
    //   params: values,
    //   callback: (err, res) => {
    //     if (!err) {
    //       NavigationServices.resetActionTo(SCENE_NAMES.HOME);
    //       // onSubmitFcmToken();
    //     }
    //   },
    // });
    NavigationServices.resetActionTo(SCREENS_NAME.HOME);


  }, []);

  return (
    <SignInView
      isLoading={false}
      onPressSubmit={onPressSubmit}
      // onChangeText={onChangeText}
    />
  );
}
