export interface SetTokenAction {
  type: "SET_TOKEN";
  payload: string;
}

export interface SetLoadingAction {
  type: "SET_LOADING";
  payload: boolean;
}

export type ConfirmAccountAction = SetTokenAction | SetLoadingAction;
