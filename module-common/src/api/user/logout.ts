import axios from 'axios';
import { getHeaders, getQualifiedUrl } from '../utils';

export async function logout() {
  await axios({
    method: 'POST',
    url: getQualifiedUrl('/auth/users/login'),
    headers: getHeaders(),
  });
}
