import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private api: HttpClient) { }

  public APIBaseUrl = "http://localhost:5000/api/User"
  private url = "";

  Authenticate(username : string , password: string): Observable<User> {
    this.url = this.APIBaseUrl + '/auth'
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'})
    const options = { headers: headers };
    const AuthParams = {'username':username , 'password' : password}
    return this.api.post<User>(this.url, AuthParams, options)
  }

}
export class User {
  userId! : number;
  username? : string;
  password? : string;
  isAdmin? : boolean
}


