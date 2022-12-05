import {ERROR} from 'store/actionsType';

export const showError = payload => ({
  type: ERROR.DIALOG.SHOW,
  payload,
});

export const hideError = () => ({
  type: ERROR.DIALOG.HIDE,
});
