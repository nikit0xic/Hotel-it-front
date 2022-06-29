import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  @Output()
 public login = new EventEmitter()
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
    this.router.navigate([''])
  }

  onSubmit(): void {
    // const { username, password } = this.form;
    // this.authService.login(username, password).subscribe(
    //   data => {
    //     this.tokenStorage.saveToken(data.accessToken);
    //     this.tokenStorage.saveUser(data);
    //     this.isLoginFailed = false;
    //     this.isLoggedIn = true;
    //     this.roles = this.tokenStorage.getUser().roles;
    //     this.reloadPage();
    //   },
    //   err => {
    //     this.errorMessage = err.error.message;
    //     this.isLoginFailed = true;
    //   }
    // );
    this.isLoggedIn = true
    this.login.emit(this.form.username)
    this.router.navigate(['profile'])
  }

  reloadPage(): void {
    window.location.reload();
  }

}
