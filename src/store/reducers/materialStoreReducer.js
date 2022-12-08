import {MATERIAL_STORE} from 'store/actionsType';
import {createSelector} from 'reselect';
import {STATUS} from 'constants/appConstants';
import {MATERIAL} from 'helpers/data/material';

const initialState = {
  // TODO
  material: MATERIAL,
  foundMaterial: MATERIAL,
  materialDetail: {},
};

function handleFindMaterial(material = [], preList = [], key) {
  if (key) {
    preList = material.filter((e) => e.name.includes(key.toLowerCase()));
    return preList || [];
  }
}

function getMaterialDetail(list = [], itemID) {
  return list.find((e) => e.id === itemID);
}

function updateMaterialDetail(list = [], data) {
  // const indexNeedToUpdate = list.findIndex(e => e.id === item.id);
  // list[indexNeedToUpdate] = item;
  // return list;

  return list.map((e) => {
    if (e.id === data.id) {
      return {
        ...e,
        count: data.count,
        last_import: data.last_import,
        note: data.note,
      };
    }
    return e;
  });
}

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
    case MATERIAL_STORE.GET_MATERIAL_DETAIL: {
      return {
        ...state,
        materialDetail: getMaterialDetail(state.material, action.payload),
      };
    }
    case MATERIAL_STORE.UPDATE_MATERIAL: {
      return {
        ...state,
        material: updateMaterialDetail(state.material, action.payload),
        foundMaterial: updateMaterialDetail(
          state.foundMaterial,
          action.payload,
        ),
      };
    }
    case MATERIAL_STORE.ADD_NEW: {
      return {
        ...state,
        material: state.material.push(action.payload),
      };
    }
    case MATERIAL_STORE.DELETE: {
      return {
        ...state,
        material: state.material.filter((e) => e.id !== action.payload.id),
        foundMaterial: state.material.filter((e) => e.id !== action.payload.id),
      };
    }
    case MATERIAL_STORE.DEACTIVATE: {
      return {
        ...state,
        material: state.material.map((e) => {
          if (e.id === action.payload.id) {
            return {
              ...e,
              status:
                action.payload.currentStatus === STATUS.DEACTIVATED
                  ? STATUS.ACTIVE
                  : STATUS.DEACTIVATED,
            };
          }
          return e;
        }),
        foundMaterial: state.material.map((e) => {
          if (e.id === action.payload.id) {
            return {
              ...e,
              status:
                action.payload.currentStatus === STATUS.DEACTIVATED
                  ? STATUS.ACTIVE
                  : STATUS.DEACTIVATED,
            };
          }
          return e;
        }),
      };
    }
    default:
      return state;
  }
};

export default materialStoreReducer;
