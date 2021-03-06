import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';

import { UserNameEffects } from './store/effects/username.effects';
import { userDataReducer } from './store/reducers/userdata.reducer';
import { userNameReducer } from './store/reducers/username.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    StoreModule.forRoot({ 
      userName: userNameReducer,
      userData: userDataReducer,
    }),
    EffectsModule.forRoot([UserNameEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
