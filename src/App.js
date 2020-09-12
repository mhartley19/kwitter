import React from "react";
import { Provider } from "react-redux";
import { Helmet } from "react-helmet";
import { PersistGate } from "redux-persist/integration/react";
import { Navigation } from "./components";
import configureStore from "./redux/configureStore";
import "./screens/Screens.css";

const { store, persistor } = configureStore();

const KWITTER = {
  store,
  persistor,
};

window.KWITTER = KWITTER;

export const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kwitter | Query</title>
      </Helmet>
      <Navigation />
    </PersistGate>
  </Provider>
);
