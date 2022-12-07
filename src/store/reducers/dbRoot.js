import {USER_STATUS} from 'constants/appConstants';
import {DBROOT} from 'store/actionsType';

const initialState = {
  // TODO
  initialized: false,
  users: [],
  stores: [],
  material: [],
};

const dbRoot = (state = initialState, action) => {
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
    case DBROOT.DELETE_USER: {
      return {
        ...state,
        users: state.users.filter((e) => e.id !== action.payload.id),
      };
    }
    case DBROOT.DEACTIVATE_USER: {
      return {
        ...state,
        users: state.users.map((e) => {
          if (e.id === action.payload.id) {
            return {
              ...e,
              status:
                action.payload.currentStatus === USER_STATUS.DEACTIVATED
                  ? USER_STATUS.ACTIVE
                  : USER_STATUS.DEACTIVATED,
            };
          }
          return e;
        }),
      };
    }
    default:
      return state;
  }
};

export default dbRoot;
