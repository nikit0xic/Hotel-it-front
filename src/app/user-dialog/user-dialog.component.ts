import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ApiService} from "../../services/api.service";
import {User} from "../../model/user";
import {AbstractControl, AbstractControlOptions, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector:'my-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
  export class DialogOverview implements OnInit {

  user?: User
  notBlankValidator = (control: AbstractControl) => {
    return control.value.trim().length == 0 ? {blank: true} : null;
  }
  name = new FormControl('', [Validators.required, this.notBlankValidator]);
  lastName = new FormControl('', [Validators.required, this.notBlankValidator]);
  middleName = new FormControl('');
  date = new FormControl('', [Validators.required])
  role = new FormControl('RECEPTIONIST',[Validators.required]);
  address = new FormControl('',[Validators.required]);
  phone = new FormControl('',[Validators.required]);
  email = new FormControl('',[Validators.required]);
  username = new FormControl('',[Validators.required]);
  password = new FormControl('',[Validators.required]);

  last = new Date()
  filterFunc = (date: any): boolean => {
    return date<this.last
  }

  formGroup = new FormGroup({
    name: this.name,
    lastName: this.lastName,
    middleName: this.middleName,
    date: this.date,
    role: this.role,
    address:this.address,
    phone:this.phone,
    email:this.email,
 //   username:this.username,
  //  password:this.password
  });

  constructor(
    public dialogRef: MatDialogRef<DialogOverview>,
    private httpService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data && data.user)
      this.user = data.user;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    if (this.user) {
      this.user.date = new Date(this.user.date)
      this.formGroup.patchValue(this.user);
    }
    this.last.setFullYear(this.last.getFullYear()-14)
  }

  save() {
    if (this.formGroup.invalid) return
    let data = {
      name: this.name.value,
      lastName: this.lastName.value,
      middleName: this.middleName.value,
      date:this.date.value,
      role:this.role.value,
      address:this.address.value,
      phone:this.phone.value,
      email:this.email.value,
      username:this.username.value,
      password:this.password.value
    }
    //
    // if (this.user){
    //   this.httpService.update(this.user.id,data).subscribe(v => this.dialogRef.close(v))
    // }
    // else{
    //   this.httpService.save(data).subscribe(v => this.dialogRef.close(v))
    // }

    this.dialogRef.close(data)
  }
}

