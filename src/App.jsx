import React from 'react'
import { Route, Routes } from "react-router-dom";
import Login from './components/Login/Login.jsx'
import Dashboard from "../src/pages/Dashboard/Dashboard";
import axios from "axios";
import Landing from './pages/Landing/Landing';
import Register from './pages/Register/Register';
import PasswordRecovery from './pages/PasswordRecovery/PasswordRecovery';
import ImportPoducts from './components/importProducts/ImportProducts'
import DataGrid from "./components/DataGrid/DataGrid.jsx"
import AdminProductos from "./pages/AdminProductos/AdminProductos.jsx"

axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Landing />}></Route>
      <Route path={"/register"} element={<Register />}></Route>
      <Route path={"/password-recovery"} element={<PasswordRecovery />}></Route>
      <Route path={"/dashboard"} element={<Dashboard />}></Route>
      <Route path={"/import"} element={<ImportPoducts />}></Route>
      <Route path={"/datagrid"} element={<DataGrid />}></Route>
      <Route path={"/adminProductos"} element={<AdminProductos />}></Route>
      {/* <Route path={"/adminPortafolios"} element={<AdminPortafolios />}></Route>
      <Route path={"/adminVendedores"} element={<AdminVendedores />}></Route>
      <Route path={"/adminConfiguracion"} element={<AdminConfiguracion />}></Route>
      <Route path={"/adminEstadisticas"} element={<AdminEstadisticas />}></Route> */}
    </Routes>
  );
};
export default App;
