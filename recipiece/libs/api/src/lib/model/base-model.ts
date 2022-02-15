export interface IBaseModel {
  id: string;
  created: number;
}

export interface IBaseUserOwnedModel extends IBaseModel {
  owner: string;
}
