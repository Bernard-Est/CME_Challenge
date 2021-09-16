import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Seat } from './seat.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private api: HttpClient ) { }

  public APIBaseUrl = "http://localhost:5000/api/Reservation"
  private url = "";

  GetBySeatId(seatId: number): Observable<Reservation[]> {
    this.url = this.APIBaseUrl + '/GetBySeatId/' + seatId
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    const options = { headers: headers };
    return this.api.get<Reservation[]>(this.url, options)
  }

  GetByUserId(playId:number , userId: number): Observable<Reservation[]> {
    this.url = this.APIBaseUrl + '/GetByUserId'
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    const options = { headers: headers };
    const param = {'playId' : playId , 'userId' : userId}
    return this.api.post<Reservation[]>(this.url, param, options)
  }

  GetByStatusId(statusId :number): Observable<Reservation[]> {
    this.url = this.APIBaseUrl + '/GetByStatusId/' + statusId
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    const options = { headers: headers };
    return this.api.get<Reservation[]>(this.url, options)
  }
  
  GetAll(): Observable<Reservation[]> {
    this.url = this.APIBaseUrl + '/GetAll'
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    const options = { headers: headers };
    return this.api.get<Reservation[]>(this.url, options)
  }

  EditReservation(reservation: Reservation): Observable<Reservation> {
    this.url = this.APIBaseUrl + '/EditReservation'
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'})
    const options = { headers: headers };
    return this.api.post<Reservation>(this.url,reservation, options)
  }

  DeleteReservation(reservationId: number): Observable<Reservation> {
    this.url = this.APIBaseUrl + '/DeleteReservation'
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    const options = { headers: headers };
    return this.api.post<any>(this.url,reservationId, options)
  }

  Update(reservation : Reservation):Observable<Reservation>{
    this.url = this.APIBaseUrl + '/Update'
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'})
    const options = { headers: headers };
    return this.api.put<Reservation>(this.url,reservation, options)
  }
}

export class Reservation {
  reservationId!: number;
  date!: Date;
  seatId?: number;
  statusId?: number;
  description?: string;
  userId? : number;
  seat! : Seat
}

