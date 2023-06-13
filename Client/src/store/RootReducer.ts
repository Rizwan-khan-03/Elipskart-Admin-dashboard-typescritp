import { combineReducers } from 'redux'
import { cartReducer } from '../Component/maincomponent/Cart/Reduxx/cartReducer';
import { mobileListReducer } from '../Component/maincomponent/Mobiless/Reduxx/MobileReducer';
import { authenticationReducer } from './Auth/AuthReducer'


export const rootReducer = combineReducers({
    authentication: authenticationReducer,
    mobileList:mobileListReducer,
    cart:cartReducer
    // Add other reducers here if needed
  });