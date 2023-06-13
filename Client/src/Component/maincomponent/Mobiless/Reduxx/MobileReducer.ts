import * as action_type from '../../../../store/Constant';

interface AuthenticationState {
  loading: boolean;
  redirect: boolean;
  data: any;
  cart: any;
  error?: string;
  mobileDetails: any;
}

const initialState: AuthenticationState = {
  loading: false,
  redirect: true,
  data: null,
  cart: null,
  mobileDetails:null
};

export const mobileListReducer = (
  state: AuthenticationState = initialState,
  action: any
): AuthenticationState => {
  switch (action.type) {
    //MOBILELIST START
    case action_type.MOBILELIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case action_type.MOBILELIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case action_type.MOBILELIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    //MOBILELIST END 
    
    //MOBILE DETAILS START
    case action_type.MOBILEDETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case action_type.MOBILEDETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        mobileDetails: action.data,
      };
    case action_type.MOBILEDETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    //MOBILE DETAILS START
// //ADD TO CART
// case action_type.ADD_TO_CART_REQUEST:
//   return {
//     ...state,
//     loading: true,
//   };
// case action_type.ADD_TO_CART_SUCCESS:
//   return {
//     ...state,
//     loading: false,
//     cart: action.data,
//   };
// case action_type.ADD_TO_CART_FAILURE:
//   return {
//     ...state,
//     loading: false,
//     error: action.error,
//   };
    default:
      return state;
  }
};
