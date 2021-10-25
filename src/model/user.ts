export class User{

  constructor(
              public isChecked: boolean,
              public id:number,
              public name:string,
              public lastName:string,
              public middleName:string,
              public date: Date,
              public age:number,
              public role:string,
              public address:string,
              public phone:string,
              public email:string){
  }
}
