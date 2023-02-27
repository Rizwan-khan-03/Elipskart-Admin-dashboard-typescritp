
import Login from "../Pages/Login";
import Dashboard from "../components/Maincomponent/Dashboard/Dashboard";
import Layout from "../components/Common/Layout/Layout";
import Company from "../components/Maincomponent/Company/Company";
import MaterialCategory from "../components/Maincomponent/MaterialCategory/MaterialCategory";
import Users from "../components/Maincomponent/Users/Users";
import VehicleType from "../components/Maincomponent/VehicleType/VehicleType";
import NoteFound from "../components/Common/Layout/NoteFound";

export const routepath = [
  {
    path: "/",
    Element: Login,
    private: false,
  },
  {
    path: "/dashboard",
    Element: Dashboard,
    private: true,
  },
  {
    path: "/company",
    Element: Company,
    private: true,
  },
  {
    path: "/materialCategory",
    Element: MaterialCategory,
    private: true,
  },
  {
    path: "/users",
    Element: Users,
    private: true,
  },
  {
    path: "/vehicleType",
    Element: VehicleType,
    private: true,
  },
 

];


