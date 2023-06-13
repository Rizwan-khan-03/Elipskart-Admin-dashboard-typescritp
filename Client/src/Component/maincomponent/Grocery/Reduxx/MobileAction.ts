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
