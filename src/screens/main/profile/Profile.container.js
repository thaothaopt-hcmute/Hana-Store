import React, {useLayoutEffect} from 'react';
import ProfileView from './Profile.view';
import {NAMESPACE} from './Profile.constants';
import {getString} from 'utils/i18n';

export default function ProfileContainer({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: getString(`${NAMESPACE}.title`),
    });
  }, [navigation]);

  return (
    <ProfileView isLoading={false} />
  );
}
