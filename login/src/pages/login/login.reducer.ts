import { LoginAction, SetLoadingAction, SetPasswordAction, SetUsernameAction } from './login.actions';
import { LoginState } from './login.state';

export const loginReducer = (state: LoginState, action: LoginAction) => {
  switch (action.type) {
    case 'SET_LOADING':
      return handleSetLoadingAction(state, action);
    case 'SET_PASSWORD':
      return handleSetPasswordAction(state, action);
    case 'SET_USERNAME':
      return handleSetUsernameAction(state, action);
  }
};

function handleSetLoadingAction(state: LoginState, action: SetLoadingAction): LoginState {
  return {
    ...state,
    loading: action.payload,
  };
}

function handleSetUsernameAction(state: LoginState, action: SetUsernameAction): LoginState {
  return {
    ...state,
    username: action.payload,
    valid: (action.payload || '').trim().length >= 6 && (state.password || '').trim().length >= 6,
  };
}

function handleSetPasswordAction(state: LoginState, action: SetPasswordAction): LoginState {
  return {
    ...state,
    password: action.payload,
    valid: (action.payload || '').trim().length >= 6 && (state.username || '').trim().length >= 6,
  };
}
