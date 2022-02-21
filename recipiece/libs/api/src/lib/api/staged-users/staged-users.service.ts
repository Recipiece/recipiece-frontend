import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConnector } from '../api-connector';
import { SessionService } from '../sessions';

@Injectable()
export class StagedUsersService extends ApiConnector<any> {

  constructor(
    session: SessionService,
    client: HttpClient,
  ) { 
    super(session, client, '/staged-users');
  }

  public stageUser(username: string, email: string, password: string): Observable<any> {
    const url = this.getFullUrl('/stage');
    return this.client.post(url, {
      username, email, password,
    }, {headers: this.getHeaders(false)});
  }

  public confirmStagedUser(token: string): Observable<any> {
    const url = this.getFullUrl('/confirm');
    return this.client.post(url, {
      token,
    }, {headers: this.getHeaders(false)});
  }
}
