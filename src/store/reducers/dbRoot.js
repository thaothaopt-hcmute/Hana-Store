import {STATUS, WORK_TYPE} from 'constants/appConstants';
import {chunk} from 'lodash';
import moment from 'moment';
import {DBROOT} from 'store/actionsType';

const initialState = {
  initialized: false,
  users: [],
  workSheet: {},
  workTime: {},
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
        workTime: action.payload.workTime,
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
                action.payload.currentStatus === STATUS.DEACTIVATED
                  ? STATUS.ACTIVE
                  : STATUS.DEACTIVATED,
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

      // Tính thời gian đã làm việc trả milisecond
      let realWorkTimeInDay = []; // Lấy mảng chẵn, k lấy lẻ
      if (_listWorkInDay.length > 1) {
        if (_listWorkInDay.length % 2 != 0) {
          realWorkTimeInDay = _listWorkInDay.slice(
            0,
            _listWorkInDay.length - 1,
          );
        } else {
          realWorkTimeInDay = _listWorkInDay;
        }
      }
      if (realWorkTimeInDay.length > 0) {
        // chunk là để cắt mảng thành mảng 2 chiều -  Ví dụ: từ [1,2,3,4] => [[1,2], [3,4]]
        const totalTimeInDay = chunk(realWorkTimeInDay, 2).reduce(
          (total, e) => {
            const [checkIn, checkOut] = e;
            return total + (checkOut.time - checkIn.time);
          },
          0,
        );
        const timeWorkUser = state.workTime[userId] || {};
        timeWorkUser[day] = totalTimeInDay;
        state.workTime[userId] = timeWorkUser;
      }
      console.warn(state.workTime);
      return {
        ...state,
        workSheet: {...state.workSheet},
        workTime: {...state.workTime},
      };
    }
    default:
      return state;
  }
};

export default dbRoot;
