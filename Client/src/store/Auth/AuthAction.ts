import * as action_type from '../Constant';

interface Action<T> {
  type: string;
  payload: T;
}

export interface GetLoginAction extends Action<unknown> {
  payload: unknown;
  callback: (result: any) => void;
}
export const getLogin = (payload: unknown): Action<unknown> => {
  return {
    type: action_type.LOGIN_REQUEST,
    payload
  };
};


// call inside loginsaga 
export const loginSuccess = (payload:any): Action<undefined> => {
  return {
    type: action_type.LOGIN_SUCCESS,
    payload: payload,
  };
};
// call inside loginsaga 
export const loginFailure = (error: string): Action<string> => {
  return {
    type: action_type.LOGIN_FAILURE,
    payload: error
  };
};
