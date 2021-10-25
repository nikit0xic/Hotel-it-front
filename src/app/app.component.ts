import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../services/api.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogOverview} from "./user-dialog/user-dialog.component";
import {UserTableComponent} from "./user-table/user-table.component";

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
  styleUrls:[`./app.component.css`],
  providers:[ApiService]
})
export class AppComponent{

  constructor(public dialog: MatDialog,private httpService: ApiService) {}

  @ViewChild(UserTableComponent) tableComponent?: UserTableComponent

  openDialog():void {
    const dialogRef = this.dialog.open(DialogOverview);
    dialogRef.afterClosed()
      .subscribe(v => {
      if (v){
        this.tableComponent?.getUsers();
      }
    });
  }
}
