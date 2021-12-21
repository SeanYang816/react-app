import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "App";
import MUI from "MUI/";
import { Provider } from "react-redux";
import store from "store/configureStore";
import 'index.css';

const themes = {
  light: {
    color: "#000000",
    background: "#eeeeee"
  },
  dark: {
    color: "#ffffff",
    background: "#222222"
  }
};
export const ThemeContext = React.createContext(themes.light);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeContext.Provider value={themes}>
      {/* <App /> */}
      <MUI />
    </ThemeContext.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
