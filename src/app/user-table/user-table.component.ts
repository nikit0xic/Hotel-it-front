import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {User} from "../../model/user";
import {ApiService} from "../../services/api.service";
import {Sort} from "@angular/material/sort";
import {SelectionModel} from "@angular/cdk/collections";
import {MatTableDataSource} from "@angular/material/table";
import {DialogOverview} from "../user-dialog/user-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {PageEvent} from "@angular/material/paginator";

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
    'role',
    'address',
    'phone',
    'email',
    'buttons'
  ];

  sortColumn: string = "name"
  isAsc = true;
  limit = 10;
  length?: number = 50;
  page = 0;
  users: User[]=[];
  myDataArray=this.users;

  constructor(  private httpService: ApiService,
                public dialog: MatDialog
  ){}

  ngOnInit(){
   this.getUsers()
  }

  getUsers(){
    let data = {
      sort: this.sortColumn,
      isAsc: this.isAsc,
      limit: this.limit,
      page: this.page,
    }
    this.httpService.findAll(data)
      .subscribe(value => {
      this.myDataArray = value;
    });
  }

  sortData(event: Sort){
    this.isAsc = event.direction == "asc";
    this.sortColumn = event.active;
    this.getUsers()
  }

  setPage(event: PageEvent) {
    this.page = event.pageIndex;
    this.limit = event.pageSize;
    this.getUsers()
  }

  dataSource = new MatTableDataSource<User>(this.myDataArray);
  selection = new SelectionModel<User>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  @Output() updateTable = new EventEmitter<any>();
  deleteRow(id: number){
    this.httpService.delete(id).subscribe(v=> {
      this.updateTable.emit()
    });
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  openDialogForUpdate(user: User):void{
    const dialogRef = this.dialog.open(DialogOverview, {data: {user: user}});
    dialogRef.afterClosed()
      .subscribe(v => {
        if(v)
          this.getUsers();
      })
  }

}
