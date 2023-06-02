
import Login from "../Pages/Login";
import Dashboard from "../components/Maincomponent/Dashboard/Dashboard";
import Layout from "../components/Common/Layout/Layout";
import Grocery from "../components/Maincomponent/Grocery/Grocery";
import Mobile from "../components/Maincomponent/Mobile/Mobile";
import Fashion from "../components/Maincomponent/Fashion/Fashion";
import Electronics from "../components/Maincomponent/Electronics/Electronics";
import NoteFound from "../components/Common/Layout/NoteFound";
import Buety from "../components/Maincomponent/Buety/Buety";
import Appliances from "../components/Maincomponent/Appliances/Appliances";
import MobileIndex from '../components/Maincomponent/Mobile/'
export const routepath = [
  {
    path: "/",
    Element: Login,
    private: false,
  },
  {
    path: "/Dashboard",
    Element: Dashboard,
    private: true,
  },
  {
    path: "/Grocery",
    Element: Grocery,
    private: true,
  },

  {
    path: "/Mobile",
    Element: MobileIndex,
    private: true,
  },
  {
    path: "/Fashion",
    Element: Fashion,
    private: true,
  },
  
  {
    path: "/Buety",
    Element: Buety,
    private: true,
  },
  {
    path: "/Electronic",
    Element: Electronics,
    private: true,
  },
  {
    path: "/Appliances",
    Element: Appliances,
    private: true,
  },

];


