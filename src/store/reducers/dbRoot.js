import {DBROOT} from 'store/actionsType';

const initialState = {
  // TODO
  users: [],
  stores: [],
};

const dbRoot = (state = initialState, action) => {
  switch (action.type) {
    case DBROOT.INIT_DATA: {
      return {
        ...state,
        users: action.payload.users,
        stores: action.payload.stores,
        statistics: action.payload.statistics,
      };
    }
    default:
      return state;
  }
};

export default dbRoot;
