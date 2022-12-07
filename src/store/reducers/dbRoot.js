import {DBROOT} from 'store/actionsType';

const initialState = {
  // TODO
  initialized: false,
  users: [],
  stores: [],
};

const dbRoot = (state = initialState, action) => {
  console.warn(action);
  switch (action.type) {
    case DBROOT.INIT_DATA: {
      return {
        ...state,
        users: action.payload.users,
        stores: action.payload.stores,
        statistics: action.payload.statistics,
        initialized: true,
      };
    }
    default:
      return state;
  }
};

export default dbRoot;
