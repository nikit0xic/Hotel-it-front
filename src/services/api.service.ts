import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private userUrl: string;

  constructor(private http: HttpClient){
    this.userUrl='http://localhost:8080/hotel-it/users';
  }

  public findAll(data: any):Observable<User[]>{
    // @ts-ignore
    return this.http.get(this.userUrl, {params: data});
  }

  public save(user: any){
    return this.http.post(this.userUrl, user);
  }

  public update(id: number, data: any){
    return this.http.put(this.userUrl  +id, data);
  }

}
