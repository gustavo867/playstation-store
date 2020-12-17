import React from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/index';

import Routes from './routes/routes';
import ThemeSwitcher from './components/ThemeSwitcher';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate
        persistor={persistor}
        loading={<ActivityIndicator size="small" color="#FFF" />}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="default"
        />
        <Routes />
        <ThemeSwitcher />
      </PersistGate>
    </Provider>
  );
};

export default App;
