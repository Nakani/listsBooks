import React from 'react';
import { Provider } from 'react-redux';
import Store from './src/reduxs/store-config'
import Router from './src/router'

export default function App() {
  return (
    <>
      <Provider store={Store}>
        <Router />
      </Provider>
    </>
  );
}