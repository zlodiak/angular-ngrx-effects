export interface IUserData {
  age: number;
  gender: string;
}

export interface IAppState {
  userName: string;
  userData: IUserData;
}

export interface IUserNameAction {
  type: string;
  userName: string;
}