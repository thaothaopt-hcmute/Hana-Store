import { CATEGORIES } from 'helpers/data/categories';
import { ALL_IDIOMS } from 'helpers/data/idioms';
import { IDIOMS } from 'store/actionsType';
const initialState = {
// TODO
categories: CATEGORIES,
isSelectedIdioms: false,
idioms: [],
all_idioms: ALL_IDIOMS
};

function handleSelectCategory(originList = [], item) {
  return originList.map((e) => {
    if (e.id === item.id) {
      const {isSelected} = e || {};
      return {...e, isSelected: !isSelected};
    }
    return e;
  });
}

function handleCollectIdioms(categories = []) {
  const all_idioms = ALL_IDIOMS;
  let selectIdioms = [];
  categories.forEach((c) => {
    const tempt = all_idioms.filter((q) => q.categoryId === c.id) || [];
    selectIdioms = selectIdioms.concat(tempt);
  });
  return selectIdioms;
}

function pickSelectedCategories(list = []) {
  return list.filter((e) => e.isSelected === true);
}

const idiomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case IDIOMS.SELECT_CATEGORY: {
      return {
        ...state,
        categories: handleSelectCategory(state.categories, action.payload),
      };
    }
    case IDIOMS.GET_IDIOMS: {
      return {
        ...state,
        idioms: handleCollectIdioms(pickSelectedCategories(state.categories)),
        isSelectedIdioms: true,
      };
    }
    default:
      return state;
  }
};

export default idiomsReducer;
