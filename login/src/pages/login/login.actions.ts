export interface SetUsernameAction {
  type: 'SET_USERNAME';
  payload: string;
}

export interface SetPasswordAction {
  type: 'SET_PASSWORD';
  payload: string;
}

export interface SetLoadingAction {
  type: 'SET_LOADING';
  payload: boolean;
}

export type LoginAction = SetUsernameAction | SetPasswordAction | SetLoadingAction;
