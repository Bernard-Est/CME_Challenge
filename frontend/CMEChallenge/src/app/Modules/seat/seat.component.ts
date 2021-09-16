import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Core/auth.service';
import { Reservation, ReservationService } from 'src/app/Core/reservation.service';
import { Seat, SeatService } from 'src/app/Core/seat.service';
import { ToastService } from 'src/app/Core/toast.service';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {

  Id: number = 0
  Seatss: Seat[] = []
  Reservations: Reservation[] = []
  userid: number = 0
  UserReservations: Reservation[] = []

  constructor(
    private routeAct: ActivatedRoute,
    private seat: SeatService,
    private reservation: ReservationService,
    private toastr : ToastService
  ) { }

  ngOnInit(): void {
    var user = localStorage.getItem('User')!;
    var userInfo: User = JSON.parse(user)
    this.userid = userInfo.userId;

    this.routeAct.queryParams.subscribe((d) => {
      this.Id = d.id;
    })
    this.getSeatByPlaysId()
  }

  getSeatByPlaysId() {
    this.seat.GetByPlaysId(this.Id).subscribe(d => {
      this.Seatss = d
      this.CheckReservationInPlay()
    })

  }

  getReservationBySeatsId(seatId: number) {
    this.reservation.GetBySeatId(seatId).subscribe(d => {
      this.Reservations = d
    })
  }

  CheckReservationInPlay() {
    debugger
    this.reservation.GetByUserId(this.Id, this.userid).subscribe(d => {
      this.UserReservations = d
      this.Seatss.forEach(seat => {
        this.UserReservations.forEach(res => {
          if (seat.seatId == res.seatId) {
            debugger
            seat.status = res.statusId
          }
        })
      })
    })


  }

  Reserve(seat: Seat) {
    if (seat.status){
      this.toastr.showError("Seat already reserved!")
    }else{
    if(seat.available){
      var reser = new Reservation();
      reser.seatId = seat.seatId
      reser.date = new Date();
      reser.userId = this.userid
      reser.description = ""
      reser.statusId = 1;
  
      this.reservation.EditReservation(reser).subscribe(d=>{
        this.toastr.showSuccess("Your reservation is done, wait for admin!")
        this.seat.UpdateSeatAvailibility(seat.seatId , false).subscribe();
      })
    }else{
      this.toastr.showError("Seat not Available!")
    }

  }
  }
}
