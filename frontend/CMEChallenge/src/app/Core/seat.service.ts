import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeatService {

  constructor(private api: HttpClient) { }

  public APIBaseUrl = "http://localhost:5000/api/Seat"
  private url = "";

  GetByPlaysId(playsId: number): Observable<Seat[]> {
    this.url = this.APIBaseUrl + '/GetByPlaysId/' + playsId
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    const options = { headers: headers };
    return this.api.get<Seat[]>(this.url, options)
  }

  GetAll(): Observable<Seat[]> {
    this.url = this.APIBaseUrl + '/GetAll'
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    const options = { headers: headers };
    return this.api.get<Seat[]>(this.url, options)
  }

  EditSeat(seat: Seat): Observable<Seat> {
    this.url = this.APIBaseUrl + '/EditSeat'
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'})
    const options = { headers: headers };
    return this.api.post<Seat>(this.url,seat, options)
  }

  DeleteSeat(seat: Seat): Observable<Seat> {
    this.url = this.APIBaseUrl + '/DeleteSeat'
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    const options = { headers: headers };
    return this.api.post<any>(this.url,seat, options)
  }

  UpdateSeatAvailibility(seatId:number, isAvailable :boolean):Observable<any>{
    this.url = this.APIBaseUrl + '/UpdateSeatAvailibility'
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'})
    const options = { headers: headers };
    const params ={"seatId":seatId , "isAvailable":isAvailable}
    return this.api.put<any>(this.url,params, options)
  }

  UpdateSeat(seat: Seat): Observable<Seat> {
    this.url = this.APIBaseUrl + '/UpdateSeat'
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'})
    const options = { headers: headers };
    return this.api.put<Seat>(this.url,seat, options)
  }
}

export class Seat {
  seatId!: number;
  name!: string;
  playsId? : number;
  available?: boolean;
  status? : number;
}
