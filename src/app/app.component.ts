import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { addUserDataAction } from './store/actions/userdata.action';
import { addUserNameAction } from './store/actions/username.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private store: Store) {}
  
  addUser(userName: string, age: number, gender: string) {
    console.log('add', userName, age, gender)

    this.store.dispatch(addUserNameAction({ userName }));

    const userData = { age, gender };
    this.store.dispatch(addUserDataAction({ userData }));
  }

}
