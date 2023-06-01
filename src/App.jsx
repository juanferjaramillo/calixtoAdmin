import { Route, Routes } from "react-router-dom";
import LoginPage from "../src/pages/LoginPage/LoginPage";
import Dashboard from "../src/pages/Dashboard/Dashboard";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<LogingPage />}></Route>
      <Route path={"/dashboard"} element={<Dashboard />}></Route>
    </Routes>
  );
};
export default App;
