import React from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor, ApplicationState } from './redux/index';
import Routes from './routes/routes';

const App: React.FC = () => {
  const barStyle = useSelector(
    (state: ApplicationState) => state.theme.theme.status_bar_color,
  );

  return (
    <Provider store={store}>
      <PersistGate
        persistor={persistor}
        loading={<ActivityIndicator size="small" color="#FFF" />}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle={barStyle}
        />
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;
