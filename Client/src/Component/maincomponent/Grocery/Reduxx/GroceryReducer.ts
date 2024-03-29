import * as action_type from '../../../../store/Constant';

interface AuthenticationState {
  loading: boolean;
  redirect: boolean;
  data: any;
  error?: string;
}

const initialState: AuthenticationState = {
  loading: false,
  redirect: true,
  data: null,
};

export  const groceryReducer = (
  state: AuthenticationState = initialState,
  action: any
): AuthenticationState => {
  switch (action.type) {
    case action_type.GROCERY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case action_type.GROCERY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case action_type.GROCERY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
