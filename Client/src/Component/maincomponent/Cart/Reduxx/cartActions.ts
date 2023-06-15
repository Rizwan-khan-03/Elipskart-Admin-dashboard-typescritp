import * as action_type from '../../../../store/Constant';

interface Action<T> {
  type: string;
  payload: T;
}

//remove cart actions
export const  removeCartRequest = (itemId:any)=> {
  return {
    type: action_type.REMOVE_FROM_CART_REQUEST,
    itemId,
    
  };
};


// call inside mobilesaga 
export const removeCartSuccess = (payload:any): Action<undefined> => {
  return {
    type: action_type.REMOVE_FROM_CART_SUCCESS,
    payload: payload,
  };
};
// call inside MOBILELISTsaga 
export const removeCartFailure = (error: string): Action<string> => {
  return {
    type: action_type.REMOVE_FROM_CART_FAILURE,
    payload: error
  };
};


//place order  actions
export const  placeOrderRequest = (item:any)=> {
  return {
    type: action_type.PLACE_ORDER_REQUEST,
    item,
    
  };
};


// call inside mobilesaga 
export const placeOrderSuccess = (payload:any): Action<undefined> => {
  return {
    type: action_type.PLACE_ORDER_SUCCESS,
    payload: payload,
  };
};
// call inside MOBILELISTsaga 
export const placeOrderFailure = (error: string): Action<string> => {
  return {
    type: action_type.PLACE_ORDER_FAILURE,
    payload: error
  };
};