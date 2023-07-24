import { put } from 'redux-saga/effects';
import { useNavigate } from 'react-router-dom';
import * as action_type from '../../../../store/Constant';
import { getAllGroceryItemDetails, getAllGroceryList } from '../../../../Config/Service/service.grocery';

export function* groceryListSaga(payload: any): Generator<any, any, any> {
  try {
    const result = yield getAllGroceryList(); // Assuming getAllGroceryList returns a promise
    // Access the value returned by getAllGroceryList
    if(result?.data?.success){
      payload.callback(result?.data)
      // Dispatch login success action
      yield put({ type: action_type.GROCERY_SUCCESS ,data:result?.data});
      return result; // Return the result
    }else{
      console.log(result?.message)
    }
  } catch (error: any) {
    // Dispatch login failure action with error message
    yield put({ type: action_type.GROCERY_FAILURE, error: error.message as string });
  }
}

export function* groceryCartSaga(payload: any): Generator<any, any, any> {
  try {
    const result = yield getAllGroceryItemDetails(payload?.itemId); // Assuming getAllMobileList returns a promise
    if(result?.data?.success){
      // Dispatch getMobileDetails success action
      yield put({ type: action_type.ADD_TO_CART_SUCCESS ,data:result?.data?.payload});
      return result; // Return the result
    }else{
      console.log(result?.message)
    }
  } catch (error: any) {
    // Dispatch getMobileDetails failure action with error message
    yield put({ type: action_type.ADD_TO_CART_FAILURE, error: error.message as string });
  }
}
