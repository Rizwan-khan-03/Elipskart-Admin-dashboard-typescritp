import * as action_type from '../../../../store/Constant';

interface Action<T> {
  type: string;
  payload: T;
}

export interface GetLoginAction extends Action<unknown> {
  payload: unknown;
  callback: (result: any) => void;
}
export const  getGroceryListRequest = (callback:any)=> {
  return {
    type: action_type.GROCERY_REQUEST,
    callback,
    
  };
};


// call inside mobilesaga 
export const groceryListSuccess = (payload:any): Action<undefined> => {
  return {
    type: action_type.GROCERY_SUCCESS,
    payload: payload,
  };
};
// call inside GROCERYsaga 
export const groceryListFailure = (error: string): Action<string> => {
  return {
    type: action_type.GROCERY_FAILURE,
    payload: error
  };
};
export const  adCartRequest = (itemId:any)=> {
  return {
    type: action_type.ADD_TO_CART_REQUEST_GROCERY,
    itemId,
    
  };
};


// call inside mobilesaga 
export const adCartSuccess = (payload:any): Action<undefined> => {
  return {
    type: action_type.ADD_TO_CART_SUCCESS,
    payload: payload,
  };
};
// call inside MOBILELISTsaga 
export const adCartFailure = (error: string): Action<string> => {
  return {
    type: action_type.ADD_TO_CART_FAILURE,
    payload: error
  };
};