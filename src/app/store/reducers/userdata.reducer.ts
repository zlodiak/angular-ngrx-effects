import { createReducer, on } from '@ngrx/store';
import { addUserDataAction } from '../actions/userdata.action';
import { IUserData } from '../state/interfaces';

const initialStateUserData: IUserData = {
  age: null,
  gender: null,
};

export const userDataReducer = createReducer(
  initialStateUserData,
  on(addUserDataAction, (state, { userData }) => userData),
)
