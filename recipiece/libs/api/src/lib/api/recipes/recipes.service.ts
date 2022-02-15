import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IRecipe, IRecipeQuery } from '../../model';
import { IPagedResponse } from '../../model/paged-result';
import { ApiConnector } from '../api-connector';
import { SessionService } from '../sessions';

@Injectable()
export class RecipesService extends ApiConnector<IRecipe> {
  constructor(sessionService: SessionService, client: HttpClient) {
    super(sessionService, client, '/recipes');
  }

  public listForUser(
    query?: IRecipeQuery & { [key: string]: any }
  ): Observable<IPagedResponse<IRecipe>> {
    const url = this.getFullUrl(`/list/${this.sessionService.userId}`);
    const options: any = { headers: this.getHeaders() };
    if (!!query) {
      options.params = new HttpParams({ fromObject: query });
    }
    return this.client
      .get<IPagedResponse<IRecipe>>(url, options)
      .pipe(map((response) => {
        return response as unknown as IPagedResponse<IRecipe>;
      }));
  }
}
