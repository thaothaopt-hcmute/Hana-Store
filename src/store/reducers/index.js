import {combineReducers} from 'redux';

// Reducer Imports
import idiomsReducer from './idiomsReducer';
import otherReducer from './otherReducer';
import auth from './authReducer';
import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';
import connectReducer from './connectReducer';
import errorReducer from './errorReducer';
import loadingReducer from './loadingReducer';

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['userInfo'],
  version: 1.0,
};

const idiomsPersistConfig = {
  key: 'idioms',
  storage: AsyncStorage,
  whitelist: ['categories', 'idioms', 'isSelectedIdioms', 'favoriteQuote'],
  version: 1.0,
};

const rootReducer = combineReducers({
  // Reducers
  idioms: persistReducer(idiomsPersistConfig, idiomsReducer),
  other: otherReducer,
  auth: persistReducer(authPersistConfig, auth),
  connect: connectReducer,
  error: errorReducer,
  loading: loadingReducer,
});

export default rootReducer;
