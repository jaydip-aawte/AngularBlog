import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    //here we enlist user created module which will get bundeled in future
    AppComponent,
    UserRegisterComponent,
  ],
  imports: [
    //here we enlist imported modules of which functionality we want to Use
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
