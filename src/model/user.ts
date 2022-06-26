export class User{
  constructor(
              public id:number,
              public name:string,
              public lastName:string,
              public middleName:string,
              public date: Date,
              public roles:any,
              public address:string,
              public phone:string,
              public email:string,
              public username:string,
              public password:string){
  }
}
