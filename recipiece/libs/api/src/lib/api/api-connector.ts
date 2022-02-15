import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBaseModel } from '../model/base-model';
import { SessionService } from './sessions';

export abstract class ApiConnector<T extends IBaseModel> {
  constructor(
    protected sessionService: SessionService,
    protected client: HttpClient,
    protected baseUrl: string
  ) {}

  public getById(id: string): Observable<T> {
    const url = this.getFullUrl(`/${id}`);
    return this.client.get<T>(url, { headers: this.getHeaders() });
  }

  public create(entity: Partial<T>): Observable<T> {
    const url = this.getFullUrl('/');
    return this.client.post<T>(url, entity, { headers: this.getHeaders() });
  }

  public update(entity: Partial<T>): Observable<T> {
    const url = this.getFullUrl(`/${entity.id}`);
    return this.client.put<T>(url, entity, { headers: this.getHeaders() });
  }

  public delete(entity: Partial<T>): Observable<any> {
    const url = this.getFullUrl(`/${entity.id}`);
    return this.client.delete(url, { headers: this.getHeaders() });
  }

  public save(entity: Partial<T>): Observable<T> {
    if (entity.id) {
      return this.update(entity);
    } else {
      return this.create(entity);
    }
  }

  protected getHeaders(useAuth: boolean = true): HttpHeaders {
    let headers = new HttpHeaders({
      'content-type': 'application/json',
    });
    if (useAuth) {
      headers = headers.append(
        'authorization',
        `Bearer ${this.sessionService.token}`
      );
    }
    return headers;
  }

  protected getFullUrl(endpoint: string): string {
    return `http://localhost:8800${this.baseUrl}${endpoint}`;
  }
}
