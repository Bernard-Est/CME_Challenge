import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Reservation, ReservationService } from 'src/app/Core/reservation.service';
import { SeatService } from 'src/app/Core/seat.service';
import { Status, StatusService } from 'src/app/Core/status.service';
import { ToastService } from 'src/app/Core/toast.service';

@Component({
  selector: 'app-admin-reservation',
  templateUrl: './admin-reservation.component.html',
  styleUrls: ['./admin-reservation.component.scss']
})
export class AdminReservationComponent implements OnInit {

  GetAllReservations = new Subscription();
  data: Reservation[] = [];
  Statuses : Status[] =[]

  constructor(
    private reservation : ReservationService,
    private toastr : ToastService,
    private seat : SeatService,
    private status : StatusService
  ) { }

  ngOnInit(): void {
    this.fetchData()
    this.getAllStatus()
  }

  ngOnDestroy(): void {
    this.GetAllReservations.unsubscribe();
  }

  
  fetchData() {
    this.GetAllReservations = this.reservation.GetByStatusId(1).subscribe((result) => {
      if (result != null) {
        result.forEach((element: any) => {
          this.data.push(element);
        });
      }
    });
  }

  UpdateReser(reser : Reservation){
    debugger
    this.reservation.Update(reser).subscribe(d =>{
      debugger
      this.toastr.showSuccess("Updated")
      if(reser.statusId == 1 || reser.statusId == 2){
        this.seat.UpdateSeatAvailibility(reser.seatId! , false).subscribe()
      }
      else{
        this.seat.UpdateSeatAvailibility(reser.seatId! , true).subscribe()
      }
    })
  }

  getAllStatus(){
    this.status.GetAll().subscribe(d=>{
      this.Statuses = d
    })
  }

}
