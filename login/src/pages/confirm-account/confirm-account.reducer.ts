import {
  ConfirmAccountAction,
  SetTokenAction,
  SetLoadingAction,
} from "./confirm-account.actions";
import { ConfirmAccountState } from "./confirm-account.state";

export const confirmAccountReducer = (state: ConfirmAccountState, action: ConfirmAccountAction): ConfirmAccountState => {
  switch (action.type) {
    case "SET_TOKEN":
      return handleSetTokenAction(state, action);
    case "SET_LOADING":
      return handleSetLoadingAction(state, action);
  }
};

function handleSetTokenAction(state: ConfirmAccountState, action: SetTokenAction): ConfirmAccountState {
  return {
    ...state,
    token: action.payload,
    valid: (action.payload || "").trim().length === 16,
  };
}

function handleSetLoadingAction(state: ConfirmAccountState, action: SetLoadingAction): ConfirmAccountState {
  return {
    ...state,
    loading: action.payload,
  }
}
