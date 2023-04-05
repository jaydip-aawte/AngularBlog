//it is compulsory to put export if you need this class to be imported in other class
export class User{
  //this is how we define Pojo in angular with first var name and then data type and there is no need to give delimeter
  name:String=""
  mobileNumber:number=0
  address:String=""
  username:String=""
  dob:String=new Date().toLocaleString()
}
