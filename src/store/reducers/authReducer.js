import { AUTH } from "store/actionsType";

// import { AUTH } from 'store/actionsType';
const initialState = {

// TODO
userInfo: {}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.SIGN_IN: {
      return {
        ...state,
        userInfo: action.payload,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
