import { put } from 'redux-saga/effects';
import { useNavigate } from 'react-router-dom';
import * as action_type from '../Constant';
import { loginUser,RegisterUser} from "../../Config/Service/Service";

export function* loginSaga(payload: any): Generator<any, any, any> {
  try {
    const result = yield loginUser(payload);
    if (result?.success) {
      yield put({ type: action_type.LOGIN_SUCCESS, data: result });
      return result;
    } else {
      console.log(result?.message)
    }
  } catch (error: any) {
    yield put({ type: action_type.LOGIN_FAILURE, error: error.message as string });
  }
}
export function* registerSaga(payload: any): Generator<any, any, any> {
  try {
    console.log('payload',payload);
    const result = yield RegisterUser(payload.payload);
    if (result?.success) {
      yield put({ type: action_type.REGISTER_SUCCESS, data: result });
      return result;
    } else {
      console.log(result?.message)
    }
  } catch (error: any) {
    yield put({ type: action_type.REGISTER_FAILURE, error: error.message as string });
  }
}

