import React from 'react';
import './App.css';
import {useRoutes} from "react-router-dom";
import {routes} from "./components/routes/Routes";
import { Provider } from 'react-redux';
import {store} from './service/store/store';

function App() {
  const element = useRoutes(routes)

  return (
      <Provider store={store}>
        {element}
      </Provider>
  );
}

export default App;
