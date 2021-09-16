import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Plays, PlaysService } from 'src/app/Core/plays.service';
import { Seat, SeatService } from 'src/app/Core/seat.service';
import { ToastService } from 'src/app/Core/toast.service';

@Component({
  selector: 'app-admin-seats',
  templateUrl: './admin-seats.component.html',
  styleUrls: ['./admin-seats.component.scss']
})
export class AdminSeatsComponent implements OnInit {

  GetAllSeats = new Subscription();
  data: Seat[] = [];
  playsList : Plays[] =[]

  constructor(
    private seats: SeatService,
    private toastr : ToastService,
    private plays : PlaysService
  ) { }

  ngOnInit(): void {
    this.GetAllPlays()
    this.fetchData()
  }

  ngOnDestroy(): void {
    this.GetAllSeats.unsubscribe();
  }

  fetchData() {
    this.GetAllSeats = this.seats.GetAll().subscribe((result) => {
      if (result != null) {
        result.forEach((element: any) => {
          this.data.push(element);
        });
      }
    });
  }

  AddEntry() {
    debugger
    if (this.data !== undefined) {
    }
    const record = new Seat();
    record.seatId;
    this.data.unshift(record);
  }

  Edit(seatObj: Seat) {
    if(seatObj.seatId){
      this.seats.UpdateSeat(seatObj).subscribe(d=>{
        this.toastr.showSuccess("Updated")
      })
    }else{
      this.seats.EditSeat(seatObj).subscribe((result) => {
        if (result != null) {
          console.log("Seat Done")
          this.toastr.showSuccess("Succefully added!")
          this.data.splice(this.data.indexOf(seatObj), 1);
          const newEntry: any = result;
          this.data.unshift(newEntry);
        }
      });
    }
  }

  Delete(seat: Seat) {
    if(seat != null){
      var Id = seat.seatId;
      this.seats.DeleteSeat(seat).subscribe(d =>{
        console.log("Seat of id: "+ seat.seatId + " is deleted")
        this.toastr.showSuccess("Succefully Deleted!")
      });
    }
  }

  GetAllPlays(){
    this.plays.GetAll().subscribe(d=>{
      this.playsList = d
    })
  }
}
