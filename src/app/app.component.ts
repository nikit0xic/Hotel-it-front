import {Component} from '@angular/core';
import {ApiService} from "../services/api.service";
import { TokenStorageService } from 'src/services/token-storage.service';
import {User} from "../model/user";

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
  styleUrls:[`./app.component.css`],
  providers:[ApiService]
})
export class AppComponent{
  private roles: string[] = [];
  isLoggedIn = false;
  showEmployeesList = false;
  showModeratorBoard = false;
  username?: string;

  public static employeesData = [ new User(
    1,
  'Никита',
 'Терехов',
  'Геннадьевич',
    new Date(),
   [],
  'string',
  '89094533819',
  'joniker'),
    new User(
      2,
      'Елизавета',
      'Медведева',
      'Игоревна',
      new Date(),
      [],
      'ул. Кузнецовская',
      '89615131630',
      'medv'),
    new User(
      3,
      'Андрей',
      'Сергеев',
      'Александрович',
      new Date(),
      [],
      'ул Кронверкская',
      '88005553535',
      'persik')
  ]
  constructor(private tokenStorageService: TokenStorageService) {}

  ngOnInit(): void {

  }

  setProfileInfo(name: string){
    this.isLoggedIn = true;
    this.showEmployeesList = true
    this.username = name
  }


}
