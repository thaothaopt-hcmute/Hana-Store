/*
  func Helper gen actionType
*/
export const asyncTypes = (action) => ({
  ORIGIN: action,
  HANDLER: `${action}_HANDLER`,
  PENDING: `${action}_PENDING`,
  START: `${action}_START`,
  MORE: `${action}_MORE`,
  SUCCESS: `${action}_SUCCESS`,
  FAILURE: `${action}_FAILURE`,
  ERROR: `${action}_ERROR`,
  CLEAR: `${action}_CLEAR`,
  END: `${action}_END`,
});
// Actions
export const DBROOT = {
  INIT_DATA: 'INIT_DATA'
}

export const AUTH = {
  SIGN_IN: asyncTypes('AUTH/SIGN_IN'),
};

export const IDIOMS = {
  SELECT_CATEGORY: 'IDIOMS/SELECT_CATEGORY',
  GET_IDIOMS: 'IDIOMS/GET_IDIOMS',
  LIKE_A_IDIOM: 'IDIOMS/LIKE_A_IDIOMS',
};

export const OTHER = {
  GET_APP_VERSION: asyncTypes('OTHER/GET_APP_VERSION'),
};

/*
  CONNECTIVITY
  - receive, sound notification
*/
export const CONNECTIVITY = {
  APP_CONNECTIVITY_CHANGE: 'CONNECTIVITY/APP_CONNECTIVITY_CHANGE',
};

export const LOADING = {
  FETCH: {
    FETCHING: 'LOADING/FETCH_FETCHING',
    NON_FETCHING: 'LOADING/FETCH_NON_FETCHING',
  },
  DIALOG: {
    SHOW: 'LOADING/DIALOG_SHOW',
    HIDE: 'LOADING/DIALOG_HIDE',
  },
};

export const ERROR = {
  DIALOG: {
    SHOW: 'ERROR/DIALOG_SHOW',
    HIDE: 'ERROR/DIALOG_HIDE',
  },
};
