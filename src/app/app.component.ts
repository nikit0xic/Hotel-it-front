import {Component, OnInit} from '@angular/core';
import {ApiService} from "../services/api.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogOverview} from "./user-dialog/user-dialog.component";

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
  styleUrls:[`./app.component.css`],
  providers:[ApiService]
})
export class AppComponent{

  constructor(public dialog: MatDialog,private httpService: ApiService) {}

  openDialog():void {
    const dialogRef = this.dialog.open(DialogOverview);
    dialogRef.afterClosed().subscribe(v => {
      if (v){}
        //вызов у таблицы получения данных
    });
  }
}
