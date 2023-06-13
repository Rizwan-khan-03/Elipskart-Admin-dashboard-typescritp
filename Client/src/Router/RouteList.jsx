
import Appliances from "../Component/maincomponent/Apliances/Appliances";
import Beauty from "../Component/maincomponent/Beauty/Beauty";
import Groceriess from "../Component/maincomponent/Grocery";
import Mobiles from "../Component/maincomponent/Mobiless/Mobiles";
import Login from "../Pages/Login";
import electronics from './img/elec.jpg'
import fashion from './img/fashion.jpg'
import furniture from './img/furniture.jpg'
import groce from './img/Groceriess.jpg'
import moblies from './img/moblies.jpg'
import beauty from './img/beauty.jpg'
import home from './img/home.jpg'
import Home from "../Component/maincomponent/Home/Home";
import Fashion from "../Component/maincomponent/Fashion/Fashion";
import Electronics from "../Component/maincomponent/Electronics/Electronics";
import SelectedMobileDetails from "../Component/maincomponent/Mobiless/SelectedMobileDetails";
import CartDtails from "../Component/maincomponent/Cart/Index";


//UserDetails
export const routepath = [
  {
    path: "/",
    Element: Login,
    private: false,
  },
  {
    path: "/home",
    Element: Home,
    private: true,
  },
  {
    path: "/grocery",
    Element: Groceriess,
    private: true,
  },
  {
    path: "/mobiles",
    Element: Mobiles,
    private: true,
  }, 
  {
    path: "/mobiles/:id",
    Element: SelectedMobileDetails,
    private: true,
  }, 
  {
    path: "/fashion",
    Element: Fashion,
    private: true,
  },
  {
    path: "/electronics",
    Element: Electronics,
    private: true,
  },
 
 
  {
    path: "/applances",
    Element: Appliances,
    private: true,
  },
  {
    path: "/beauty",
    Element: Beauty,
    private: true,
  },
  {
    path: "/cart",
    Element: CartDtails,
    private: true,
  },
];
export const routeLink = [
  {
    link:'home',
    name:'Home',
    img: home
  },
  {
    link:"grocery",
    name:'Grocery',
    img: groce,
  },
  {
    link:'mobiles',
    name:'Mobiles',
    img: moblies
  },
  {
    link:'fashion',
    name:'fashion ',
    img: fashion
  },
  {
    link:'electronics',
    name:'Electronics',
    img: electronics
  },
 
  {
    link:'applances',
    name:'Applances',
    img: furniture
  },
  {
    link:'beauty',
    name:'Beauty',
    img: beauty
  },
 
]

