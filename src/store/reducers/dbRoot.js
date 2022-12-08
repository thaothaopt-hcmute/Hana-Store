import {USER_STATUS, WORK_TYPE} from 'constants/appConstants';
import moment from 'moment';
import {DBROOT} from 'store/actionsType';

const initialState = {
  initialized: false,
  users: [],
  workSheet: {},
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
        workSheet: action.payload.workSheet,
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
    case DBROOT.WORK_SHEET_CHECKIN_CHECKOUT: {
      const isCheckIn = action.payload.isCheckIn;
      const userId = action.payload.userId;
      const timeMoment = moment();
      const day = timeMoment.format('YYYY-MM-DD');
      const userWorkSheet = state.workSheet[userId] || {};

      const listWorkInDay = userWorkSheet?.[day] || [];
      _listWorkInDay = listWorkInDay.concat({
        time: timeMoment.toDate().getTime(),
        type: isCheckIn ? WORK_TYPE.CHECK_IN : WORK_TYPE.CHECK_OUT,
      });
      userWorkSheet[day] = _listWorkInDay;
      state.workSheet[userId] = userWorkSheet;
      return {
        ...state,
        workSheet: {...state.workSheet},
      };
    }
    default:
      return state;
  }
};

export default dbRoot;
