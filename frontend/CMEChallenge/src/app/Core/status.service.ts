import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private api: HttpClient) { }

  public APIBaseUrl = "http://localhost:5000/api/Status"
  private url = "";

  GetAll(): Observable<Status[]> {
    this.url = this.APIBaseUrl + '/GetAll'
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    const options = { headers: headers };
    return this.api.get<Status[]>(this.url, options)
  }
}

export class Status {
  statusId!: number
  type? : string
}
