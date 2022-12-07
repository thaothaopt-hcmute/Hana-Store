import {MATERIAL_STORE} from 'store/actionsType';

export const getAllMaterialSubmit = () => ({
  type: MATERIAL_STORE.GET_ALL_MATERIAL,
});

export const searchMaterialRequest = payload => ({
  type: MATERIAL_STORE.SEARCH_MATERIAL,
  payload,
});
