import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { addUserDataAction } from './store/actions/userdata.action';
import { addUserNameAction } from './store/actions/username.action';
import { selectUserData, selectUserDataGender } from './store/selectors/userdata.selector';
import { selectUserName } from './store/selectors/username.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  userName$ = this.store.pipe(select(selectUserName));
  userData$ = this.store.pipe(select(selectUserData));
  userDataGender$ = this.store.pipe(select(selectUserDataGender));

  constructor(private store: Store) {}
  
  addUser(userName: string, age: number, gender: string) {
    console.log('add', userName, age, gender)

    this.store.dispatch(addUserNameAction({ userName }));

    const userData = { age, gender };
    this.store.dispatch(addUserDataAction({ userData }));
  }

}
