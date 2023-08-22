import Login from "../Pages/Login";
import Dashboard from "../components/Maincomponent/Dashboard";
import Grocery from "../components/Maincomponent/Grocery";
import Fashion from "../components/Maincomponent/Fashion";
import Electronics from "../components/Maincomponent/Electronics";
import Buety from "../components/Maincomponent/Buety";
import Appliances from "../components/Maincomponent/Appliances";
import MobileIndex from '../components/Maincomponent/Mobile/'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LoginNew from "../Pages/LoginNew";

export const routepath = [
  {
    path: "/",
    Element: LoginNew,
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

///link
export const routLinks = [
  {
    link: "Dashboard",
    Element: <DashboardIcon />,
  },
  {
    link: "Grocery",
    Element:  <ShoppingCartIcon />,
  },

  {
    link: "Mobile",
    Element: <PeopleIcon />,
  },
  {
    link: "Fashion",
    Element:  <BarChartIcon />,
  },
  
  {
    link: "Buety",
    Element: <LayersIcon />,
  },
  {
    link: "Electronic",
    Element: <AssignmentIcon />,
  },
  {
    link: "Appliances",
    Element:  <DashboardIcon />,
  },

];
export const categoryLinks=[
  "A"
]
