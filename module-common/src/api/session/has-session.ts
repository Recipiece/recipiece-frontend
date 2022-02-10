export function hasSession(): boolean {
  const user = sessionStorage.getItem('rcp-user') || localStorage.getItem('rcp-user');
  const token = sessionStorage.getItem('rcp-token') || localStorage.getItem('rcp-token');
  return !!this.localStorage.getItem('rcp-remember') && !!user && !!token;
}
