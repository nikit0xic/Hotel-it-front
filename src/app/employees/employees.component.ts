import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../services/user.service";
import {UserTableComponent} from "../user-table/user-table.component";
import {DialogOverview} from "../user-dialog/user-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class Employees implements OnInit {
  content?: string;

  constructor(private userService: UserService, public dialog: MatDialog, private httpService: ApiService) { }
  ngOnInit(): void {
    // this.userService.getAdminBoard().subscribe(
    //   data => {
    //     this.content = data;
    //   },
    //   err => {
    //     this.content = JSON.parse(err.error).message;
    //   }
    // );
  }

  @ViewChild(UserTableComponent) tableComponent?: UserTableComponent
  //
  // openDialog():void {
  //   const dialogRef = this.dialog.open(DialogOverview);
  //   dialogRef.afterClosed()
  //     .subscribe(v => {
  //     if (v){
  //       this.tableComponent?.getUsers();
  //     }
  //   });
  // }

  updateTable():void{
   // this.tableComponent?.getUsers();
  }
}
