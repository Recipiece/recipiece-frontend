import { getSession } from "./session";

export function getQualifiedUrl(endpoint: string): string {
  return `http://localhost:8800${endpoint}`;
}

export function getHeaders(useAuth: boolean = true): any {
  const headers: any = {
    'content-type': 'application/json',
  }
  if(useAuth) {
    headers['authorization'] = `Bearer ${getSession().token}`
  }
  return headers;
}
