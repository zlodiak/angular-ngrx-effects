import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { PropertyService } from '../../services/property.service';
import { addUserNameAction, loadPropertiesActionType } from '../actions/username.action';
import { IUserNameAction } from '../state/interfaces';
 
@Injectable()
export class UserNameEffects {
 
  loadProperties$ = createEffect(() => this.actions$.pipe(
    ofType(loadPropertiesActionType),
    mergeMap((userNameAct: IUserNameAction) => this.propertyService.getProperties()
      .pipe(
        map(properties => {
          const random = Math.floor(Math.random() * 3);
          return addUserNameAction({ 
            userName: properties[random].title + ' ' + userNameAct.userName 
          })
        }),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private propertyService: PropertyService
  ) {}
}