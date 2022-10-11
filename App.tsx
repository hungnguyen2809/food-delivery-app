import React from 'react';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from 'src/app/store';
import AppNavigation from 'src/navigation';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default gestureHandlerRootHOC(App);
