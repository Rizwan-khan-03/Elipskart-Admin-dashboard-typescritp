import { Routes, Route, Navigate } from "react-router-dom";
import ProtectRoutes from './ProtectRoutes'
import Login from "../Pages/Login";
import AuthPoint from "./Auth";
import Layout from "../components/Common/Layout/Layout";
import LoginNew from "../Pages/LoginNew";

function Router() {
  return (
    <div className="anvContainer">
      <Routes>
        <Route path='/'>
          {/* <Route index element={<AuthPoint Component={Login} />} /> */}
          <Route index element={<AuthPoint Component={LoginNew} />} />
        </Route>
        <Route path='/*'>
          <Route index path='*' element={<ProtectRoutes Component={Layout} />} />
        </Route>
      </Routes>

    </div>
  );
}
export default Router