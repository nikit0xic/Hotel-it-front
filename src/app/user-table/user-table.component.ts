import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../model/user";
import {ApiService} from "../../services/api.service";
import {Sort} from "@angular/material/sort";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'firstName',
    'secondName',
    'thirdName',
    'birthDate',
    'age',
    'role',
    'address',
    'phoneNumber',
    'email'];
  sortColumn: string = "firstName"
  isAsc = true;
  limit = 10;
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
    this.httpService.findAll(data).subscribe(value => {
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
}
