import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ICookbook, IRecipe, IRecipeQuery } from '../../model';
import { IPagedResponse } from '../../model/paged-result';
import { ApiConnector } from '../api-connector';
import { SessionService } from '../sessions';

@Injectable()
export class CookbooksService extends ApiConnector<ICookbook> {
  constructor(session: SessionService, client: HttpClient) {
    super(session, client, '/cookbooks', 8802);
  }

  public listRecipes(
    bookId: string,
    query?: IRecipeQuery & { [key: string]: any }
  ): Observable<IPagedResponse<IRecipe>> {
    const url = this.getFullUrl(`/${bookId}/recipes`);
    const options: any = { headers: this.getHeaders() };
    if (!!query) {
      options.params = new HttpParams({ fromObject: query });
    }
    return this.client.get<IPagedResponse<IRecipe>>(url, options).pipe(
      map((response) => {
        return response as unknown as IPagedResponse<IRecipe>;
      })
    );
  }
}
