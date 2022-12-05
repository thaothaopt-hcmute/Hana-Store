import * as React from 'react';
import {Text, TextInput} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Screen from './src/screens';
import configureStore from './src/store/config/configureStore';
const storeConfig = configureStore();

function App() {
  if (Text.defaultProps == null) {
    Text.defaultProps = {};
  }
  if (TextInput.defaultProps == null) {
    TextInput.defaultProps = {};
  }
  TextInput.defaultProps.allowFontScaling = false;
  Text.defaultProps.allowFontScaling = false;

  return (
    <Provider store={storeConfig.store}>
      <PersistGate loading={null} persistor={storeConfig.persistor}>
        <Screen />
      </PersistGate>
    </Provider>
  );
}

export default App;
