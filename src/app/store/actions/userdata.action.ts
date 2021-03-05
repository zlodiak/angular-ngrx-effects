import { createAction, props } from '@ngrx/store';
import { IUserData } from '../state/interfaces';

export const addUserDataAction = createAction(
  '[userData] Add UserData',
  props<{ userData: IUserData }>()
);
