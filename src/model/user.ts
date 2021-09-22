export class User{
  // public id:number,
  // public firstName:string,
  // public secondName:string,
  // public thirdName:string,
  // public role:string,
  // public age:number,
  // public dateOfBirth: Date,
  // public email:string,
  // public address:string,
  // public phoneNumber:string
  constructor(
              public id:number,
              public firstName:string,
              public secondName:string,
              public thirdName:string,
              public birthDate: Date,
              public age:number,
              public role:string,
              public address:string,
              public phoneNumber:string,
              public email:string){
  }

  /*static init(): User{
    return  new User(-1,'','','','',0,new Date(), '','','')
  }*/
}
