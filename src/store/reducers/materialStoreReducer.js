import {MATERIAL} from 'helpers/data/material';
import {MATERIAL_STORE} from 'store/actionsType';
import {createSelector} from 'reselect';

const initialState = {
  // TODO
  material: MATERIAL,
  foundMaterial: MATERIAL,
};

const handleFindMaterial = (material = [], preList = [], key) => {
  if (key) {
    preList = material.filter((e) => e.name.includes(key.toLowerCase()));
    return preList || [];
  }
};

const materialStoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case MATERIAL_STORE.SEARCH_MATERIAL: {
      return {
        ...state,
        foundMaterial: handleFindMaterial(
          state.material,
          state.foundMaterial,
          action.payload,
        ),
      };
    }
    default:
      return state;
  }
};

export default materialStoreReducer;
