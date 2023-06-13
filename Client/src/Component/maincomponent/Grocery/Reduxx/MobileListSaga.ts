import { put } from 'redux-saga/effects';
import { useNavigate } from 'react-router-dom';
import * as action_type from '../../../../store/Constant';
import { getAllMobileList } from '../../../../Config/Service/mobileService';

export function* mobileListSaga(payload: any): Generator<any, any, any> {
  try {
    const result = yield getAllMobileList(); // Assuming getAllMobileList returns a promise
    // Access the value returned by getAllMobileList
    if(result?.data?.success){
      payload.callback(result?.data)
      // Dispatch login success action
      yield put({ type: action_type.MOBILELIST_SUCCESS ,data:result?.data});
      return result; // Return the result
    }else{
      console.log(result?.message)
    }
  } catch (error: any) {
    // Dispatch login failure action with error message
    yield put({ type: action_type.MOBILELIST_FAILURE, error: error.message as string });
  }
}
