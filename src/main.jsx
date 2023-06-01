import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import "../style.css"
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import Navbar from "./components/Navbar/Navbar.jsx";

let theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});
theme = responsiveFontSizes(theme);

const root = createRoot(document.getElementById("root"))
root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <Navbar />
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  </ThemeProvider>,

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
