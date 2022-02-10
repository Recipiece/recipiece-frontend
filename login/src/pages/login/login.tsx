import { login } from '@recipiece/module-common';
import React, { useCallback, useReducer, VFC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginReducer } from './login.reducer';
import './login.scss';
import { DEFAULT_LOGIN_STATE } from './login.state';

export const LoginComponent: VFC = () => {
  const [state, dispatch] = useReducer(loginReducer, DEFAULT_LOGIN_STATE);
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        await login(state.username, state.password);
        navigate('/dashboard');
      } catch (e) {}
    },
    [state.username, state.password]
  );

  const setUsername = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'SET_USERNAME',
      payload: e.target.value,
    });
  }, []);

  return (
    <div className="container">
      <div className="form-container form-group">
        <form onSubmit={handleSubmit}>
          <h3>Log In</h3>
          <label className="form-label">
            Email
            <input className="form-input" type="text" name="username" onChange={setUsername} />
          </label>
          <label className="form-label">
            Password
            <input className="form-input" type="password" name="password" />
          </label>
          <label className="form-switch">
            <input name="remember" type="checkbox" />
            Remember Me
          </label>
          <div className="actions-container">
            <div className="button-container">
              <button type="submit" className="btn btn-primary">
                Log In
              </button>
              <Link to="/landing/create-account">
                <button type="button" className="btn">
                  Create Account
                </button>
              </Link>
            </div>
            <Link to="/landing/forgot-password">
              <button type="button" className="btn btn-link">
                Forgot Password
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
