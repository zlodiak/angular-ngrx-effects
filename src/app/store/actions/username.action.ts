import { createAction, props } from '@ngrx/store';

export const addUserNameAction = createAction(
  '[userName] Add UserName',
  props<{ userName: string }>()
);
