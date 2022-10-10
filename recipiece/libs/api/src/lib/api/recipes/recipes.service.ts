import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRecipe } from '../../model';
import { ApiConnector } from '../api-connector';
import { SessionService } from '../sessions';

@Injectable()
export class RecipesService extends ApiConnector<IRecipe> {
  constructor(sessionService: SessionService, client: HttpClient) {
    super(sessionService, client, '/recipes', 8802);
  }

  public parseFromUrl(recipeUrl: string): Observable<IRecipe> {
    const url = this.getFullUrl('/parse/from-url');
    return this.client.post<IRecipe>(url, {url: recipeUrl}, { headers: this.getHeaders() });
  }
}
