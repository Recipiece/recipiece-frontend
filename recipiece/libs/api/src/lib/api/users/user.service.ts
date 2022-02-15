import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IUser } from '../../model/user';
import { ApiConnector } from '../api-connector';
import { SessionService } from '../sessions';

interface LoggedInBundle {
  token: string;
  user: IUser;
}

@Injectable()
export class UserService extends ApiConnector<IUser> {
  constructor(session: SessionService, client: HttpClient) {
    super(session, client, '/auth/users');
  }

  public loginUser(username: string, password: string, remember: boolean): Observable<any> {
    const url = this.getFullUrl('/login');
    return this.client
      .post<LoggedInBundle>(
        url,
        { name: username, password },
        { headers: this.getHeaders(false) }
      )
      .pipe(
        tap((body: LoggedInBundle) => {
          this.sessionService.remember = remember;
          this.sessionService.token = body.token;
          this.sessionService.userId = body.user.id;
        })
      );
  }

  public logoutUser(): Observable<any> {
    const url = this.getFullUrl('/logout');
    return this.client
      .post(url, {}, { headers: this.getHeaders() })
      .pipe(tap(() => {
        this.sessionService.clear();
      }));
  }
}
