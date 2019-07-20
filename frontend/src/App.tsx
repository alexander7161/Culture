import React from 'react';
import './App.css';
import Search from './search/Search';
import store from "./store";
import { Provider } from "react-redux";

const App: React.FC = () => {
  return (
    <Provider store={store}>
        <Search/>
        </Provider>
  );
}

export default App;
