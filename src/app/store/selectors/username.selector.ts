import { createSelector } from '@ngrx/store';
import { IAppState, IUserData } from '../state/interfaces';

const userNameState = (state: IAppState) => state.userName;

export const selectUserName = createSelector(
  userNameState,
  (userName: string) => userName
);
