import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {
  private readonly KEY_REMEMBER = 'rcp-remember';
  private readonly KEY_TOKEN = 'rcp-token';

  public get remember(): boolean {
    return JSON.parse(sessionStorage.getItem(this.KEY_REMEMBER) || 'false');
  }

  public set remember(r: boolean) {
    sessionStorage.setItem(this.KEY_REMEMBER, JSON.stringify(r));
  }

  private get _storage(): Storage {
    return this.remember ? sessionStorage : localStorage;
  }

  public get token(): string {
    return this._storage.getItem(this.KEY_TOKEN);
  }

  public set token(t: string) {
    this._storage.setItem(this.KEY_TOKEN, t);
  }

  constructor() {}

  public clear() {
    this._storage.removeItem(this.KEY_TOKEN);
    sessionStorage.removeItem(this.KEY_REMEMBER);
  }
}
