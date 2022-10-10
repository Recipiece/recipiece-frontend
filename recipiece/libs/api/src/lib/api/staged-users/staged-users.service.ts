import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConnector } from '../api-connector';
import { SessionService } from '../sessions';

@Injectable()
export class StagedUsersService extends ApiConnector<any> {
  constructor(session: SessionService, client: HttpClient) {
    super(session, client, '/staged-users', 8801);
  }

  public stageUser(email: string, password: string): Observable<void> {
    const url = this.getFullUrl('/stage');
    return this.client.post<void>(
      url,
      {
        email: email,
        password: password,
      },
      { headers: this.getHeaders(false) }
    );
  }

  public confirmStagedUser(token: string): Observable<void> {
    const url = this.getFullUrl('/confirm');
    return this.client.post<void>(
      url,
      {
        token,
      },
      { headers: this.getHeaders(false) }
    );
  }
}
