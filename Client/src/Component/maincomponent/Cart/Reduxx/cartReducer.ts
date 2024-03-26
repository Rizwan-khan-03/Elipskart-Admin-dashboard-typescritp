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
  order: [],
};

export const cartReducer = (
  state: AuthenticationState = initialState,
  action: any
): AuthenticationState => {
  switch (action.type) {
    //ADD TO CART
    case action_type.ADD_TO_CART_REQUEST_MOBILE || action_type.ADD_TO_CART_REQUEST_GROCERY:
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
      console.log('cart reducer itemId', itemId, action);
      if (itemId === "empty") {
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


    // add same product

    case action_type.ADD_SAME_PRODUCT_IN_CART_REQUEST:
      return {
        ...state,
        loading: true,
      };
      case action_type.ADD_SAME_PRODUCT_IN_CART_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case action_type.ADD_SAME_PRODUCT_IN_CART_SUCCESS:
        const itmId = action.data.id;
        const type = action.data.type;
      
        const sameItem = state.cart.find(item => item._id === itmId);
        if (!sameItem) {
          return { ...state, loading: false };
        }
      
        let updatedCart;
        if (type === 'inc') {
          // If type is 'inc', add the same item
          updatedCart = [...state.cart, sameItem];
        } else {
          // If type is not 'inc', handle quantity reduction
          const existingItemIndex = state.cart.findIndex(item => item._id === itmId);
        
          if (existingItemIndex !== -1) {
            // Item exists in the cart
            const sameItemArr = state.cart.filter(item => item._id === itmId);
            if (sameItemArr.length > 1) {
              // If quantity is more than 1, reduce the quantity
              sameItemArr.pop()
             
              updatedCart = [...state.cart.filter(item => item._id !== itmId), ...sameItemArr];
            } else {
              // If quantity is exactly 1, remove the item from the cart
              updatedCart = state.cart.filter(item => item._id !== itmId);
            }
          } else {
            // Item doesn't exist in the cart, no action needed
            updatedCart = state.cart;
          }
        }
      
        return {
          ...state,
          loading: false,
          cart: updatedCart,
        };
      



    case action_type.ADD_SAME_PRODUCT_IN_CART_FAILURE:
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
