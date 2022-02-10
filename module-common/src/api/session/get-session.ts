import { IUserSession } from "./user-session";

export function getSession(): IUserSession {
  const remember = JSON.parse(localStorage.getItem('rcp-remember'));
  const storage = remember ? localStorage : sessionStorage;
  return {
    remember: remember,
    token: storage.getItem('rcp-token'),
    user: JSON.parse(storage.getItem('rcp-user'));
  }
}
