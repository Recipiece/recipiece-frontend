import axios from 'axios';
import { IUserSession, saveSession } from '../session';
import { getHeaders, getQualifiedUrl } from '../utils';

export async function loginUser(remember: boolean, username: string, password: string): Promise<IUserSession> {
  const response = await axios({
    method: 'POST',
    data: {
      name: username,
      password: password,
    },
    url: getQualifiedUrl('/auth/users/login'),
    headers: getHeaders(false),
  });
  return saveSession(remember, response.data.token, response.data.user);
}
