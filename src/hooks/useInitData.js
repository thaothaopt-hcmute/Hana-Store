import {useDispatch, useSelector} from 'react-redux';
import React from 'react';
import {initData} from 'store/actions/dbRootActions';
import {USERS} from 'helpers/data/users';
import {isInitializedSelector} from 'store/selectors/dbRootSelector';
import {MATERIAL} from 'helpers/data/material';
import {workSheet, workTime} from 'helpers/data/workSheet';

export function useInitData() {
  const dispatch = useDispatch();
  const initialized = useSelector(isInitializedSelector);

  React.useLayoutEffect(() => {
    // TODO: Comment lại nếu muốn lấy lại data mới
    // if (initialized) {
    //   return () => {};
    // }
    dispatch(initData({users: USERS, material: MATERIAL, workSheet, workTime}));
  }, []);
}
