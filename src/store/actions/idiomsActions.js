import { IDIOMS } from 'store/actionsType';


export const selectCategory = (payload) => ({
  type: IDIOMS.SELECT_CATEGORY,
  payload,
});

export const getIdioms = () => ({
  type: IDIOMS.GET_IDIOMS,
});

export const likeAIdiom = (payload) => ({
  type: IDIOMS.LIKE_A_IDIOM,
  payload,
});

