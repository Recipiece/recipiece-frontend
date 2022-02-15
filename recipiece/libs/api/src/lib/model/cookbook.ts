import { IBaseModel } from './base-model';

export interface ICookbook extends IBaseModel {
  name: string;
  description: string;
  recipes: string[];
}

export interface ICookbookQuery {
  name?: string;
  page?: number;
}
