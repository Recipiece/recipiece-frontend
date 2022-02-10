export interface IUser {
  id: string;
  created: number;
  username: string;
  preferences: any;
  permissions: string[];
  subscriptionId: string;
}

export interface IUserSession {
  readonly remember: boolean;
  readonly token: string;
  readonly user: IUser;
}
