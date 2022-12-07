import {useDispatch, useSelector} from 'react-redux';
import React from 'react';
import {initData} from 'store/actions/dbRootActions';
import {USERS} from 'helpers/data/users';
import {isInitializedSelector} from 'store/selectors/dbRootSelector';

export function useInitData() {
  const dispatch = useDispatch();
  const initialized = useSelector(isInitializedSelector);

  React.useLayoutEffect(() => {
    if (initialized) {
      return () => {};
    }
    dispatch(initData({users: USERS}));
  }, []);
}
