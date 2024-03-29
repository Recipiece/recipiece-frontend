import { IBaseModel } from "./base-model";

export interface IPagedResponse<T extends IBaseModel> {
  data: T[];
  next?: number;
}
