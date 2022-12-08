import {WORK_TYPE} from 'constants/appConstants';

export const workSheet = {
  P1234503: {
    '2022-12-08': [
      {
        time: Date.now() - 60 * 60 * 8 * 1000, // 8 tiếng trước
        type: WORK_TYPE.CHECK_IN,
        workTime: 0, // tính mỗi 30p, trễ 1p tính trễ 30p, làm 1h29p tính 1 tiếng =))
      },
      {
        time: Date.now(),
        type: WORK_TYPE.CHECK_OUT,
        workTime: 0, // tính mỗi 30p, trễ 1p tính trễ 30p, làm 1h29p tính 1 tiếng =))
      },
    ],
  },
  P1234502: {
    '2022-12-08': [
      {
        time: Date.now() - 60 * 60 * 8 * 1000, // 8 tiếng trước
        type: WORK_TYPE.CHECK_IN,
        workTime: 0, // tính mỗi 30p, trễ 1p tính trễ 30p, làm 1h29p tính 1 tiếng =))
      },
      {
        time: Date.now(),
        type: WORK_TYPE.CHECK_OUT,
        workTime: 0, // tính mỗi 30p, trễ 1p tính trễ 30p, làm 1h29p tính 1 tiếng =))
      },
    ],
  },
};
