import { put } from 'redux-saga/effects';
import { useNavigate } from 'react-router-dom';
import * as action_type from '../Constant';
import { loginUser } from "../../Config/Service/Service";

export function* loginSaga(payload: any): Generator<any, any, any> {
  try {
    const result = yield loginUser(payload); // Assuming loginUser returns a promise
    // Access the value returned by loginUser
    if(result?.success){
      // Dispatch login success action
      yield put({ type: action_type.LOGIN_SUCCESS ,data:result});
      return result; // Return the result
    }else{
      console.log(result?.message)
    }
    
  } catch (error: any) {
    // Dispatch login failure action with error message
    yield put({ type: action_type.LOGIN_FAILURE, error: error.message as string });
  }
}
