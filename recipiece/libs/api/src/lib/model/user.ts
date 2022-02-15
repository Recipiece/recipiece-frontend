import { IBaseModel } from "./base-model";

export interface IUser extends IBaseModel {
  username: string;
  preferences: any;
}
