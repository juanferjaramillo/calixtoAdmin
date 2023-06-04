import React from 'react'
import { Route, Routes } from "react-router-dom";
import Login from './components/Login/Login.jsx'
import Dashboard from "../src/pages/Dashboard/Dashboard";
import axios from "axios";
import Landing from './pages/Landing/Landing';
import Register from './pages/Register/Register';
import PasswordRecovery from './pages/PasswordRecovery/PasswordRecovery';
import ImportPoducts from './components/importProducts/ImportProducts.jsx'

axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Landing />}></Route>
      <Route path={"/register"} element={<Register />}></Route>
      <Route path={"/password-recovery"} element={<PasswordRecovery />}></Route>
      <Route path={"/dashboard"} element={<Dashboard />}></Route>
      <Route path={"/test"} element={<ImportPoducts />}></Route>
    </Routes>
  );
};
export default App;
