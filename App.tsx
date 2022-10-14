import React from 'react';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import {store} from 'src/app/store';
import {ToastSnackbar} from 'src/components';
import AppNavigation from 'src/navigation';

const App: React.FC = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <AppNavigation />
        <ToastSnackbar />
      </PaperProvider>
    </StoreProvider>
  );
};

export default gestureHandlerRootHOC(App);
