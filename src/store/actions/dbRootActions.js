import {DBROOT} from 'store/actionsType';

export const initData = (payload) => ({
  type: DBROOT.INIT_DATA,
  payload,
});
