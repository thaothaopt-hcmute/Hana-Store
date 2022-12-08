import { AUTH } from 'store/actionsType';

export const signInSubmit = payload => ({
  type: AUTH.SIGN_IN,
  payload,
});

// export const actionSuccess = payload => ({
//   type: AUTH.ACTION.SUCCESS,
//   payload,
// });
