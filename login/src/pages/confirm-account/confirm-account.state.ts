export interface ConfirmAccountState {
  token: string;
  loading: boolean;
  valid: boolean;
}

export const DEFAULT_CONFIRM_ACCOUNT_STATE: ConfirmAccountState = {
  token: '',
  loading: false,
  valid: false,
};
