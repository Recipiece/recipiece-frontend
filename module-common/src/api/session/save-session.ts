import { IUser, IUserSession } from "./user-session";

export function saveSession(remember: boolean, token: string, user: IUser): IUserSession {
  localStorage.setItem('rcp-remember', JSON.stringify(remember));
  const storage = remember ? localStorage : sessionStorage;
  storage.setItem('rcp-token', token);
  storage.setItem('rcp-user', JSON.stringify(user));
  return { remember, token, user };
}