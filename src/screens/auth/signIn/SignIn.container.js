import React, {useLayoutEffect, useCallback} from 'react';
import SignInView from './SignIn.view';
import {NAMESPACE} from './SignIn.constants';
import NavigationServices from 'utils/navigationServices';
import SCREENS_NAME from 'constants/screensName';
import {USERS} from 'helpers/data/users';
import {useActions} from 'hooks/useActions';
import {signInSubmit} from 'store/actions/authActions';

export default function SignInContainer({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Sign In',
    });
  }, [navigation]);

  const actions = useActions({
    signInSubmit,
  });

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
    const user = USERS.find((e) => e.staffID === values.staffID);
    actions.signInSubmit(user)
    NavigationServices.resetActionTo(SCREENS_NAME.HOME, values.staffID);
  }, [actions]);

  const onPressLeft = useCallback(() => {
    NavigationServices.goBack();
  }, []);

  return (
    <SignInView
      isLoading={false}
      onPressSubmit={onPressSubmit}
      onPressLeft={onPressLeft}
    />
  );
}
