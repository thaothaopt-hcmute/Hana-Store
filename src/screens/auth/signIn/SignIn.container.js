import React, {useLayoutEffect} from 'react';
import SignInView from './SignIn.view';
import {NAMESPACE} from './SignIn.constants';

export default function SignInContainer({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Sign In',
    });
  }, [navigation]);

  const [username, onChangeText] = React.useState('Useless Text');

  const onPressLogin = useCallback(() => {}, []);

  return (
    <SignInView
      isLoading={false}
      onPressLogin={onPressLogin}
      // onChangeText={onChangeText}
    />
  );
}
