import {Component} from '@angular/core';
import {ApiService} from "../services/api.service";
import { TokenStorageService } from 'src/services/token-storage.service';

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
  styleUrls:[`./app.component.css`],
  providers:[ApiService]
})
export class AppComponent{
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  constructor(private tokenStorageService: TokenStorageService) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MANAGER');
      this.username = user.username;
    }
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
