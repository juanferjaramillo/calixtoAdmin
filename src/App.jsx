import React from 'react'
import { Route, Routes } from "react-router-dom";
import LoginPage from './components/LoginPage/LoginPage.jsx'
import Dashboard from "../src/pages/Dashboard/Dashboard";
import axios from "axios";
import Landing from './pages/Landing/Landing';
import Register from './pages/Register/Register';
import PasswordRecovery from './pages/PasswordRecovery/PasswordRecovery';

axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Landing />}></Route>
      <Route path={"/login"} element={<LoginPage />}></Route>
      <Route path={"/register"} element={<Register />}></Route>
      <Route path={"/password-recovery"} element={<PasswordRecovery />}></Route>
      <Route path={"/dashboard"} element={<Dashboard />}></Route>
    </Routes>
  );
};
export default App;
