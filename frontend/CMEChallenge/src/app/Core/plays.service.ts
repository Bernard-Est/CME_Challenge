import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaysService {

  constructor(private api: HttpClient) { }

  public APIBaseUrl = "http://localhost:5000/api/Plays"
  private url = "";

  GetByTheaterId(theaterId: number): Observable<Plays[]> {
    this.url = this.APIBaseUrl + '/GetByTheaterId/' + theaterId
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    const options = { headers: headers };
    return this.api.get<Plays[]>(this.url, options)
  }

  GetAll(): Observable<Plays[]> {
    this.url = this.APIBaseUrl + '/GetAll'
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    const options = { headers: headers };
    return this.api.get<Plays[]>(this.url, options)
  }

  EditPlays(plays: Plays): Observable<Plays> {
    this.url = this.APIBaseUrl + '/EditPlays'
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'})
    const options = { headers: headers };
    return this.api.post<Plays>(this.url,plays, options)
  }

  DeletePlays(plays: Plays): Observable<Plays> {
    this.url = this.APIBaseUrl + '/DeletePlays'
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    const options = { headers: headers };
    return this.api.post<any>(this.url,plays, options)
  }

  UpdatePlays(plays: Plays): Observable<Plays> {
    this.url = this.APIBaseUrl + '/UpdatePlays'
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'})
    const options = { headers: headers };
    return this.api.put<Plays>(this.url,plays, options)
  }

}
export class Plays {
  playsId!: number;
  name!: string;
  description?: string;
  theaterId?:number;
  isApproved?: boolean
}