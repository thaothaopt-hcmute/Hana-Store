export const getDbRootSelector = (state) => state.dbRoot;

export const isInitializedSelector = (state) =>
  getDbRootSelector(state).initialized;

export const getListStaffSelector = (state) => getDbRootSelector(state).users;
export const getWorkSheetSelector = (state) =>
  getDbRootSelector(state).workSheet;

/**
 *
 * @param {RootState} state
 * @param {string} userId
 * @param {string} day // 2022-12-08
 * @returns
 */
export const getWorkSheetOfUserByDaySelector = (state, userId, day) =>
  getDbRootSelector(state).workSheet[userId]?.[day];

export const getWorkSheetOfUserSelector = (state, userId) =>
  getDbRootSelector(state).workSheet[userId];
