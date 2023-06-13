import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Common/Layout";
import ProtectRoutes from "./ProtectRoutes";
import { routepath } from "./RouteList";

export const CheckRouter = () => {
  return (
    <div>
      <Routes>
        {routepath.map((i,index) => {
          if (!i.private) {
            return (
              <Route
                key={`route_${index}`}
                path={i.path}
                element={<ProtectRoutes>{<i.Element />}</ProtectRoutes>}
              />
            );
          } else {
            return <Route key={`route_${index}`} path="*" element={<Layout />} />;
          }
        })}
      </Routes>
    </div>
  );
};
