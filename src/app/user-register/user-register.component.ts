import { Component } from '@angular/core';
//the syntax is import {ClasName } from 'filePath without extention';
import { User } from './user-model';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
//to consume the model
userClass:User=new User();//which will get consumed in UI

}
