export interface LoginState {
  readonly loading: boolean;
  readonly username: string;
  readonly password: string;
  readonly valid: boolean;
  readonly remember: boolean;
}

export const DEFAULT_LOGIN_STATE: LoginState = {
  loading: false,
  username: '',
  password: '',
  valid: false,
  remember: false,
};
