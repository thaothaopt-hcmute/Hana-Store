import {DBROOT} from 'store/actionsType';

const initialState = {
  // TODO
  initialized: false,
  users: [],
  stores: [],
  material: [],
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
        material: action.payload.material,
        initialized: true,
      };
    }
    default:
      return state;
  }
};

export default dbRoot;
