import { createAction, props } from '@ngrx/store';
import { IUserData } from '../state/interfaces';

export const addUserDataActionType = '[userData] Add UserData';

export const addUserDataAction = createAction(
  addUserDataActionType,
  props<{ userData: IUserData }>()
);
