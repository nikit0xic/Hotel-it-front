import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ApiService} from "../../services/api.service";
import {User} from "../../model/user";
import {AbstractControl, AbstractControlOptions, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector:'my-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
  export class DialogOverview implements OnInit{
  user?: User
  notBlankValidator = (control:AbstractControl) => {return control.value.trim().length==0?{blank: true}:null}
  name = new FormControl('', [Validators.required, this.notBlankValidator])
  lastName = new FormControl('', [Validators.required, this.notBlankValidator])
  middleName = new FormControl('')
  date = new FormControl('', [Validators.required])
  formGroup = new FormGroup({
  name: this.name,
  lestName: this.lastName,
  middleName: this.middleName,
  date: this.date
})
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
    if(this.user)
      this.formGroup.patchValue(this.user);
    }

  save() {
    let data = {
      name: this.name.value,
      lastName: this.lastName.value
    }
    if (this.user)
      this.httpService.update(this.user.id,data)
    else
      this.httpService.save(data).subscribe(v => this.dialogRef.close(v), error => this.dialogRef.close())
  }
}

