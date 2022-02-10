import React, { useCallback, VFC } from "react";
import { Link, useNavigate } from "react-router-dom";

export const CreateAccountComponent: VFC = () => {
  const navigate = useNavigate();

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    navigate("/landing/confirm-account");
  }, []);

  return (
    <div className="container">
      <div className="form-container form-group">
        <h3>Create an Account</h3>
        <form onSubmit={handleSubmit}>
          <label className="form-label">
            Email
            <input name="email" className="form-input" type="text" />
          </label>
          <label className="form-label">
            Username
            <input name="username" className="form-input" type="text" />
          </label>
          <label className="form-label">
            Password
            <input name="password" className="form-input" type="password" />
          </label>
          <label className="form-label">
            Confirm Password
            <input
              name="confirm-password"
              className="form-input"
              type="password"
            />
          </label>
          <div className="actions-container">
            <div className="button-container">
              <button type="submit" className="btn btn-primary">
                Create Account
              </button>
            </div>
            <Link to="/landing/login">
              <button type="button" className="btn btn-link">
                I already have an account
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
