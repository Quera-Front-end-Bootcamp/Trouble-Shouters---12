import HomePage from "./Pages/Home/HomePage";
import Login from "./Pages/Login/LoginPage";
import Register from "./Pages/Register/RegisterPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Styles/App.css";
import {
  ROUTE_HOME_PAGE,
  ROUTE_LOGIN_PAGE,
  ROUTE_REGISTER_PAGE,
} from "./Routes/Routes";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path={ROUTE_HOME_PAGE} element={<HomePage />} />
          <Route path={ROUTE_LOGIN_PAGE} element={<Login />} />
          <Route path={ROUTE_REGISTER_PAGE} element={<Register />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
