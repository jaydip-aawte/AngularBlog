import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { FormsModule } from '@angular/forms';
import { MasterpageComponent } from './masterpage/masterpage.component';

@NgModule({
  declarations: [
    //here we enlist user created module which will get bundeled in future
    AppComponent,
    UserRegisterComponent,
    MasterpageComponent,
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
