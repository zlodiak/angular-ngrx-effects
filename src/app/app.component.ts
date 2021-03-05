import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { addUserNameAction } from './store/actions/username.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private store: Store) {}
  
  addUser(userName: string) {
    console.log('add', userName)
    this.store.dispatch(addUserNameAction({ userName }));
  }

}
