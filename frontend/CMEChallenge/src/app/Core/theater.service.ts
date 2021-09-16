import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TheaterService {

  constructor(private api: HttpClient) { }

  public APIBaseUrl = "http://localhost:5000/api/Theater"
  private url = "";

  EditTheater(theater: Theater): Observable<Theater> {
    this.url = this.APIBaseUrl + '/EditTheater'
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'})
    const options = { headers: headers };
    return this.api.post<Theater>(this.url,theater, options)
  }


  DeleteTheater(theater: Theater): Observable<Theater> {
    this.url = this.APIBaseUrl + '/DeleteTheater'
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    const options = { headers: headers };
    return this.api.post<any>(this.url,theater, options)
  }

  GetAll(): Observable<Theater[]> {
    this.url = this.APIBaseUrl + '/GetAll'
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    const options = { headers: headers };
    return this.api.get<Theater[]>(this.url, options)
  }

  UpdateTheater(theater: Theater): Observable<Theater> {
    this.url = this.APIBaseUrl + '/UpdateTheater'
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'})
    const options = { headers: headers };
    return this.api.put<Theater>(this.url,theater, options)
  }
}

export class Theater {
  theaterId!: number;
  name!: string;
  nbSeats?: number;
}
