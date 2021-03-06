import { createAction, props } from '@ngrx/store';

export const addUserNameActionType = '[userName] Add UserName';
export const loadPropertiesActionType = '[userName] Load Properties';

export const addUserNameAction = createAction(
  addUserNameActionType,
  props<{ userName: string }>()
);

export const loadPropertiesAction = createAction(
  loadPropertiesActionType,
  props<{ userName: string }>()
);
