import * as action_type from '../../../../store/Constant';

interface AuthenticationState {
  loading: boolean;
  redirect: boolean;
  cart: any[];
  order: any[];
  error?: string;
}

const initialState: AuthenticationState = {
  loading: false,
  redirect: true,
  cart: [],
  order:[],
};

export const cartReducer = (
  state: AuthenticationState = initialState,
  action: any
): AuthenticationState => {
  switch (action.type) {
    //ADD TO CART
    case action_type.ADD_TO_CART_REQUEST_MOBILE ||action_type.ADD_TO_CART_REQUEST_GROCERY:
      return {
        ...state,
        loading: true,
      };
    case action_type.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: [...state.cart, action.data]
      };
    case action_type.ADD_TO_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
      //REMOVE TO CART
    case action_type.REMOVE_FROM_CART_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case action_type.REMOVE_FROM_CART_SUCCESS:
      const itemId = action.data;
      console.log('cart reducer itemId',itemId,action);
      if (itemId==="empty") {
        return {
          ...state,
          loading: false,
          cart: []
        };
      } else {
        return {
          ...state,
          loading: false,
          cart: [...state.cart.filter((item) => item._id !== itemId)]
        };
      }
     
    case action_type.REMOVE_FROM_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
        // PLACE ORDER
    case action_type.PLACE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case action_type.PLACE_ORDER_SUCCESS:      
      return {
        ...state,
        loading: false,
        order: [...state.order, action.data]
      };
    case action_type.PLACE_ORDER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
