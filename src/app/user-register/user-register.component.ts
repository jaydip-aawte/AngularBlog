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
userModel:User=new User();//which will get consumed in UI: it is single model to bind to the UI
//now we will create Collection for Model
userArray:Array<User>=new Array<User>();
async addUser()
{
this.userArray.push(this.userModel);
this.userModel= new User();
}
}
