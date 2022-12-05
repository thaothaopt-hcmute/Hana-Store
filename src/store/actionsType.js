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
export const IDIOMS = {
  SELECT_CATEGORY: 'IDIOMS/SELECT_CATEGORY',
  GET_IDIOMS: 'IDIOMS/GET_IDIOMS',
  LIKE_A_IDIOM: 'IDIOMS/LIKE_A_IDIOMS',
};

export const OTHER = {
  GET_APP_VERSION: asyncTypes('OTHER/GET_APP_VERSION'),
};

/*
  AUTH
  - login
  - register
*/
export const AUTH = {
  SIGN_IN: asyncTypes('AUTH/SIGN_IN'),
  SIGN_UP: asyncTypes('AUTH/SIGN_UP'),
  GET_USER_INFO: asyncTypes('AUTH/GET_USER_INFO'),
  ACCESS_TOKEN: 'ACCESS_TOKEN',
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
