import { put } from 'redux-saga/effects';
import { placeOrderCall } from '../../../../Config/Service/service.cart';
import * as action_type from '../../../../store/Constant';

// remove cart
export function* removeCartSaga(payload: any): Generator<any, any, any> {
  try {
    yield put({ type: action_type.REMOVE_FROM_CART_SUCCESS, data: payload?.itemId });
  } catch (error: any) {
    yield put({ type: action_type.REMOVE_FROM_CART_FAILURE, error: error.message as string });
  }
}

// same product increament in cart 
export function* sameProductAddCartSaga(payload: any): Generator<any, any, any> {
  try {
    yield put({ type: action_type.ADD_SAME_PRODUCT_IN_CART_SUCCESS, data: payload?.itemId });
  } catch (error: any) {
    yield put({ type: action_type.ADD_SAME_PRODUCT_IN_CART_FAILURE, error: error.message as string });
  }
}

//place order PLACE_ORDER
export function* placeOrderSaga(payload: any): Generator<any, any, any> {
  try {
    console.log('placeOrderSaga payload', payload);
    const result = yield placeOrderCall(payload.item.order);
    if (result?.data?.success) {
      payload.item?.callback(result?.data)
      yield put({ type: action_type.PLACE_ORDER_SUCCESS, data: result?.data?.newOrder });
    }
  } catch (error: any) {
    yield put({ type: action_type.PLACE_ORDER_FAILURE, error: error.message as string });
  }
}