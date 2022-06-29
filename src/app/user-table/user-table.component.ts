import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter, Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {User} from "../../model/user";
import {ApiService} from "../../services/api.service";
import {Sort} from "@angular/material/sort";
import {SelectionModel} from "@angular/cdk/collections";
import {DialogOverview} from "../user-dialog/user-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {PageEvent} from "@angular/material/paginator";
import {AppComponent} from "../app.component";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})

export class UserTableComponent implements OnInit {

  displayedColumns: string[] = [
    'select',
    'name',
    'lastName',
    'middleName',
    'date',
    //'roles',
    'address',
    'phone',
    'email',
    'buttons'
  ];

  sortColumn: string = "name"
  isAsc = true;
  limit = 10;
  length: number = AppComponent.employeesData.length;
  page = 0;
  users: User[]= AppComponent.employeesData;
  myDataArray=this.users;

  constructor(  public dialog: MatDialog){}

  ngOnInit(){
    if (this.withJobPositions)
      this.displayedColumns = [
        'select',
        'name',
        'lastName',
        'middleName',
        'date',
        'roles',
        'address',
        'phone',
        'email',
        'buttons'
      ]
  }


  @Input()
  withJobPositions: boolean = false


  setPage(event:any) {
    this.page = event.pageIndex;
    this.limit = event.pageSize;
  }

  dataSource = AppComponent.employeesData;
  selection = new SelectionModel<User>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length
    return numSelected === numRows;
  }

  @Output() updateTable = new EventEmitter<any>();
  deleteRow(id: number){

    this.dataSource = this.dataSource.splice(this.dataSource.map(e=>e.id).indexOf(id),1)
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.forEach(row => this.selection.select(row));
  }

  openDialogForUpdate(user: User):void{
    const dialogRef = this.dialog.open(DialogOverview, {data: {user: user}});
    dialogRef.afterClosed()
      .subscribe(v => {
        if(v)
          user = v
      })
  }

  @ViewChild(UserTableComponent) tableComponent?: UserTableComponent
  openDialog():void {
    const dialogRef = this.dialog.open(DialogOverview);
    dialogRef.afterClosed()
      .subscribe((v:User) => {
        if (v){
          v.id = this.dataSource.length
          let tmp = this.dataSource.slice()
          tmp.push(v)
          this.dataSource =  tmp
        }
      });
  }

}
