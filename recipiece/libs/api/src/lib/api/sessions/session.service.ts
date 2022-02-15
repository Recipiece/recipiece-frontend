import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {
  private readonly KEY_REMEMBER = 'rcp-remember';
  private readonly KEY_TOKEN = 'rcp-token';
  private readonly KEY_USER_ID = 'rcp-userid';

  public get hasSession(): boolean {
    return !!this.token;
  }

  public get remember(): boolean {
    return JSON.parse(localStorage.getItem(this.KEY_REMEMBER) || 'false');
  }

  public set remember(r: boolean) {
    localStorage.setItem(this.KEY_REMEMBER, JSON.stringify(r));
  }

  private get _storage(): Storage {
    return this.remember ? localStorage : sessionStorage;
  }

  public get token(): string {
    return this._storage.getItem(this.KEY_TOKEN);
  }

  public set token(t: string) {
    this._storage.setItem(this.KEY_TOKEN, t);
  }

  public get userId(): string {
    return this._storage.getItem(this.KEY_USER_ID);
  }

  public set userId(id: string) {
    this._storage.setItem(this.KEY_USER_ID, id);
  }

  constructor() {}

  public clear() {
    this._storage.removeItem(this.KEY_TOKEN);
    this._storage.removeItem(this.KEY_USER_ID);
    localStorage.removeItem(this.KEY_REMEMBER);
  }
}
