import { createSelector } from '@ngrx/store';
import { IAppState, IUserData } from '../state/interfaces';

const userDataState = (state: IAppState) => state.userData;

export const selectUserData = createSelector(
  userDataState,
  (userData: IUserData) => userData
);

export const selectUserDataGender = createSelector(
  userDataState,
  (userData: IUserData) => userData.gender
);
