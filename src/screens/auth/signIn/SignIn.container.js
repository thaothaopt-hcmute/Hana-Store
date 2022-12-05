import React, {useLayoutEffect, useCallback} from 'react';
import SignInView from './SignIn.view';
import {NAMESPACE} from './SignIn.constants';

export default function SignInContainer({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Sign In',
    });
  }, [navigation]);

  const [username, onChangeText] = React.useState('Useless Text');

  const onPressSubmit = useCallback((values) => {
    actions.signInSubmit({
      params: values,
      callback: (err, res) => {
        if (!err) {
          NavigationServices.resetActionTo(SCENE_NAMES.MAIN);
          // onSubmitFcmToken();
        }
      },
    });

  }, []);

  return (
    <SignInView
      isLoading={false}
      onPressSubmit={onPressSubmit}
      // onChangeText={onChangeText}
    />
  );
}
