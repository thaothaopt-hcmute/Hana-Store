export const getDbRootSelector = (state) => state.dbRoot;

export const isInitializedSelector = (state) =>
  getDbRootSelector(state).initialized;

export const getListStaffSelector = (state) => getDbRootSelector(state).users;
