import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IBaseModel } from '../model/base-model';
import { IPagedResponse } from '../model/paged-result';
import { SessionService } from './sessions';

export abstract class ApiConnector<T extends IBaseModel> {
  constructor(
    protected sessionService: SessionService,
    protected client: HttpClient,
    protected readonly baseUrl: string,
    protected readonly port: number,
  ) {}

  public get(id: string): Observable<T> {
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

  public list(query?: any): Observable<IPagedResponse<T>> {
    const url = this.getFullUrl(`/list/${this.sessionService.userId}`);
    const options: any = { headers: this.getHeaders() };
    if (!!query) {
      options.params = new HttpParams({ fromObject: query });
    }
    return this.client.get<IPagedResponse<T>>(url, options).pipe(
      map((response) => {
        return response as unknown as IPagedResponse<T>;
      })
    );
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
    return `http://localhost:${this.port}/api${this.baseUrl}${endpoint}`;
  }
}
