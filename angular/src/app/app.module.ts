import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {userReducer} from "./data-access/+state/user.reducer";
import {UserEffects} from "./data-access/+state/user.effects";
import {HttpClientModule} from "@angular/common/http";
import { UserFormComponent } from './components/user-form/user-form.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ userFeatureKey: userReducer }),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 15
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
