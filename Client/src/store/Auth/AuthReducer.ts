import * as action_type from '../Constant';

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

export  const authenticationReducer = (
  state: AuthenticationState = initialState,
  action: any
): AuthenticationState => {
  switch (action.type) {
    case action_type.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case action_type.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case action_type.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
