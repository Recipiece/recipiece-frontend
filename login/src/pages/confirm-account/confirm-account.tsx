import { useCallback, useEffect, useReducer, VFC } from 'react';
import toast from 'react-hot-toast';
import { Oval } from 'react-loader-spinner';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { confirmAccountReducer } from './confirm-account.reducer';
import { DEFAULT_CONFIRM_ACCOUNT_STATE } from './confirm-account.state';
import './confirm-account.scss';

export const ConfirmAccountComponent: VFC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(confirmAccountReducer, DEFAULT_CONFIRM_ACCOUNT_STATE);

  const setToken = useCallback((token: string) => {
    dispatch({
      type: 'SET_TOKEN',
      payload: token,
    });
  }, []);

  const testToken = useCallback(() => {
    dispatch({
      type: 'SET_LOADING',
      payload: true,
    });
    // @TODO -- try and validate the token
    toast('Account Created!');
    // navigate('/landing/login');
  }, [state.token]);

  useEffect(() => {
    const tokenFromParams = searchParams.get('token');
    if (!!tokenFromParams) {
      setToken(tokenFromParams);
      testToken();
    }
  }, []);

  return (
    <div className="container">
      <div className="form-container form-group">
        <h3>Confirm Account</h3>
        <p>You should have recieved a token in your email. Enter it here and press the verify button to continue.</p>
        <label className="form-label">
          Token
          <input
            className="form-input"
            type="text"
            name="username"
            value={state.token}
            onChange={(e) => setToken(e.target.value)}
          />
        </label>
        <div className="button-container">
          <button disabled={!state.valid} className="btn btn-primary" onClick={testToken}>
            Verify
          </button>
        </div>
        <div className="loading-container">{state.loading && <Oval color="#00BFFF" height={40} width={40} />}</div>
      </div>
    </div>
  );
};
