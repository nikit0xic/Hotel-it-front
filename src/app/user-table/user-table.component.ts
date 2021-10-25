import {AfterViewInit, Component, OnInit, Output, ViewChild} from '@angular/core';
import {User} from "../../model/user";
import {ApiService} from "../../services/api.service";
import {Sort} from "@angular/material/sort";
import {PageEvent} from "@angular/material/paginator";
import {MatCheckbox} from "@angular/material/checkbox";
import {SelectionModel} from "@angular/cdk/collections";
import {MatTableDataSource} from "@angular/material/table";
import {take} from "rxjs/operators";

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})

export class UserTableComponent implements OnInit {

  displayedColumns: string[] = [
    'select',
    'id',
    'name',
    'lastName',
    'middleName',
    'date',
    'age',
    'role',
    'address',
    'phone',
    'email',
    'buttons'
  ];

  sortColumn: string = "name"
  isAsc = true;
  limit = 10;
  checked: any = [];
  length?: number = 50;
  page = 0;
  users: User[]=[];
  myDataArray=this.users;


  constructor(private httpService: ApiService){}
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

  removeSelectedRows(){
    this.selection.selected.forEach(item => {
      let index: number = this.myDataArray.findIndex(d => d === item);
      console.log(this.myDataArray.findIndex(d => d === item));
      this.myDataArray.splice(index,1)
      this.dataSource = new MatTableDataSource<User>(this.myDataArray);
    });
    this.selection = new SelectionModel<User>(true,[]);
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
}
