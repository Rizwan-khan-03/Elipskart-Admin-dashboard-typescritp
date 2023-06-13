import { put } from 'redux-saga/effects';
import * as action_type from '../../../../store/Constant';

export function* removeCartSaga(payload: any): Generator<any, any, any> {
    try {
      console.log('removeCartSaga payload',payload);
      
        yield put({ type: action_type.REMOVE_FROM_CART_SUCCESS ,data:payload?.itemId});
    } catch (error: any) {
      yield put({ type: action_type.REMOVE_FROM_CART_FAILURE, error: error.message as string });
    }
  }