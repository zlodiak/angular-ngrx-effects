import { createReducer, on } from '@ngrx/store';
import { addUserNameAction } from '../actions/username.action';

const initialStateUserName: string = '';

export const userNameReducer = createReducer(
  initialStateUserName,
  on(addUserNameAction, (state, { userName }) => userName),
)
