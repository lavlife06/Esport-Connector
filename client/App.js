import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { store } from './Redux/store';
import MainComponent from './MainComponent';
import { enableScreens } from 'react-native-screens';
enableScreens();

const App = () => {
  return (
    <Provider store={store}>
      <MainComponent />
    </Provider>
  );
};

export default App;
