import { Routes, Route } from "react-router-dom";
import ProtectRoutes from './ProtectRoutes'
import AuthPoint from "./Auth";
import Layout from "../Component/common/layout/Laout";
import SignIn from "../Pages/Login";
import SignUp from "../Pages/Register";

function Router() {
  return (
    <div className="anvContainer">
      <Routes>
        <Route path='/'>
          <Route index element={<AuthPoint Component={SignIn} />} />
          <Route path='/register' element={<AuthPoint Component={SignUp} />} />
        </Route>
        <Route path='/*'>
          <Route index path='*' element={<ProtectRoutes Component={Layout} />} />
        </Route>
      </Routes>

    </div>
  );
}
export default Router