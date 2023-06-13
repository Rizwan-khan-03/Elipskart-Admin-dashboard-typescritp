import * as action_type from '../../../../store/Constant';

interface Action<T> {
  type: string;
  payload: T;
}

export interface GetLoginAction extends Action<unknown> {
  payload: unknown;
  callback: (result: any) => void;
}
export const  getMobileListRequest = (callback:any)=> {
  return {
    type: action_type.MOBILELIST_REQUEST,
    callback,
    
  };
};
// call inside mobilesaga 
export const mobileListSuccess = (payload:any): Action<undefined> => {
  return {
    type: action_type.MOBILELIST_SUCCESS,
    payload: payload,
  };
};
// call inside MOBILELISTsaga 
export const mobileListFailure = (error: string): Action<string> => {
  return {
    type: action_type.MOBILELIST_FAILURE,
    payload: error
  };
};
export const  getMobileDetailsRequest = (id:any,callback:any)=> {
  return {
    type: action_type.MOBILEDETAILS_REQUEST,
    id,
    callback,
    
  };
};
// call inside mobilesaga 
export const mobileDetailsSuccess = (payload:any): Action<undefined> => {
  return {
    type: action_type.MOBILEDETAILS_SUCCESS,
    payload: payload,
  };
};
// call inside MOBILEDETAILSsaga 
export const mobileDetailsFailure = (error: string): Action<string> => {
  return {
    type: action_type.MOBILEDETAILS_FAILURE,
    payload: error
  };
};

// add to cart 
export interface GetLoginAction extends Action<unknown> {
  payload: unknown;
  callback: (result: any) => void;
}
export const  adCartRequest = (itemId:any)=> {
  return {
    type: action_type.ADD_TO_CART_REQUEST,
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
