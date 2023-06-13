import { take, takeEvery } from 'redux-saga/effects'
import { removeCartSaga } from '../Component/maincomponent/Cart/Reduxx/cartSaga';

import { mobileDetailsSaga, mobileListSaga ,cartSaga} from '../Component/maincomponent/Mobiless/Reduxx/MobileSaga';
import { loginSaga } from './Auth/AuthSaga';
import * as action_type from './Constant'



function* RootSaga() {
    yield takeEvery(action_type.LOGIN_REQUEST, loginSaga)
    yield takeEvery(action_type.MOBILELIST_REQUEST, mobileListSaga)
    yield takeEvery(action_type.MOBILEDETAILS_REQUEST, mobileDetailsSaga)
    yield takeEvery(action_type.ADD_TO_CART_REQUEST, cartSaga)
    yield takeEvery(action_type.REMOVE_FROM_CART_REQUEST, removeCartSaga)
   
}

export default RootSaga;


