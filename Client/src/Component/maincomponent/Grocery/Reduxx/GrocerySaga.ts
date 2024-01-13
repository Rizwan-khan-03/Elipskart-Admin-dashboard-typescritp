import { put } from 'redux-saga/effects';
import { useNavigate } from 'react-router-dom';
import * as action_type from '../../../../store/Constant';
import { getAllGroceryItemDetails, getAllGroceryList } from '../../../../Config/Service/service.grocery';

export function* groceryListSaga(payload: any): Generator<any, any, any> {
  try {


    const result = yield getAllGroceryList(payload);

    if (result?.data?.success) {
      if (payload.callback.callBack) payload.callback.callBack(result?.data)

      else payload.callback(result?.data)

      yield put({ type: action_type.GROCERY_SUCCESS, data: result?.data });

      return result;
    } else {
      console.log(result?.message)
    }
  } catch (error: any) {

    yield put({ type: action_type.GROCERY_FAILURE, error: error.message as string });
  }
}

export function* groceryCartSaga(payload: any): Generator<any, any, any> {
  try {
    const result = yield getAllGroceryItemDetails(payload?.itemId);
    if (result?.data?.success) {

      yield put({ type: action_type.ADD_TO_CART_SUCCESS, data: result?.data?.payload });
      return result;
    } else {
      console.log(result?.message)
    }
  } catch (error: any) {

    yield put({ type: action_type.ADD_TO_CART_FAILURE, error: error.message as string });
  }
}
