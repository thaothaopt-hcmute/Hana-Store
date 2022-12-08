import {DBROOT} from 'store/actionsType';

export const initData = (payload) => ({
  type: DBROOT.INIT_DATA,
  payload,
});

export const deleteUser = (payload) => ({
  type: DBROOT.DELETE_USER,
  payload,
});

export const deActivateUser = (payload) => ({
  type: DBROOT.DEACTIVATE_USER,
  payload,
});

export const checkInCheckOutWorkSheet = (payload) => ({
  type: DBROOT.WORK_SHEET_CHECKIN_CHECKOUT,
  payload,
});
