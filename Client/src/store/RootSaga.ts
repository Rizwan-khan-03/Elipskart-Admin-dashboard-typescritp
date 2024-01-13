import { take, takeEvery } from 'redux-saga/effects'
import { placeOrderSaga, removeCartSaga } from '../Component/maincomponent/Cart/Reduxx/cartSaga';
import { groceryCartSaga, groceryListSaga } from '../Component/maincomponent/Grocery/Reduxx/GrocerySaga';

import { mobileDetailsSaga, mobileListSaga ,mobileCartSaga} from '../Component/maincomponent/Mobiless/Reduxx/MobileSaga';
import { loginSaga ,registerSaga} from './Auth/AuthSaga';
import * as action_type from './Constant'



function* RootSaga() {
    yield takeEvery(action_type.LOGIN_REQUEST, loginSaga)
    yield takeEvery(action_type.REGISTER_REQUEST, registerSaga)
    yield takeEvery(action_type.MOBILELIST_REQUEST, mobileListSaga)
    yield takeEvery(action_type.MOBILEDETAILS_REQUEST, mobileDetailsSaga)
    yield takeEvery(action_type.ADD_TO_CART_REQUEST_MOBILE, mobileCartSaga)
    yield takeEvery(action_type.ADD_TO_CART_REQUEST_GROCERY, groceryCartSaga)
    yield takeEvery(action_type.REMOVE_FROM_CART_REQUEST, removeCartSaga)
    yield takeEvery(action_type.PLACE_ORDER_REQUEST, placeOrderSaga)
    yield takeEvery(action_type.GROCERY_REQUEST, groceryListSaga)
   
}

export default RootSaga;


