import React from "react";
import Routes from "./routes/index";
import GlobalStyles from "./themes/global";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyles />
        <Routes />
      </Provider>
    </>
  );
}
