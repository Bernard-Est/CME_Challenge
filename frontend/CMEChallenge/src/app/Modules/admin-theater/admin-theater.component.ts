import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Theater, TheaterService } from 'src/app/Core/theater.service';
import { ToastService } from 'src/app/Core/toast.service';
import { TheaterRoutingModule } from '../theater/theater-routing.module';

@Component({
  selector: 'app-admin-theater',
  templateUrl: './admin-theater.component.html',
  styleUrls: ['./admin-theater.component.scss']
})
export class AdminTheaterComponent implements OnInit {
  GetAllTheater = new Subscription();
  data: Theater[] = [];

  name: string = ""
  nbSeats: number = 0

  constructor(
    private theater: TheaterService,
    private toastr : ToastService

  ) { }

  ngOnInit(): void {
    this.fetchData();
  }
  ngOnDestroy(): void {
    this.GetAllTheater.unsubscribe();
  }
  fetchData() {
    this.GetAllTheater = this.theater.GetAll().subscribe((result) => {
      if (result != null) {
        result.forEach((element: any) => {
          this.data.push(element);
        });
      }
    });
  }

  AddEntry() {
    if (this.data !== undefined) {
      // if (this.data.filter((e) => e.TheaterId).length > 0) {
      //   return;
      // }
    }
    const record = new Theater();
    record.theaterId;
    this.data.unshift(record);
  }

  Edit(theaterObj: Theater) {
    debugger
    if(theaterObj.theaterId){
      this.theater.UpdateTheater(theaterObj).subscribe(d=>{
        this.toastr.showSuccess("Updated")
      })
    }else{
      this.theater.EditTheater(theaterObj).subscribe((result) => {
        if (result != null) {
          console.log("theater Done")
          this.toastr.showSuccess("Succefully added!")
          this.data.splice(this.data.indexOf(theaterObj), 1);
          const newEntry: any = result;
          this.data.unshift(newEntry);
        }
      });
    }
  }

  Delete(theater: Theater) {
    if(theater != null){
      this.theater.DeleteTheater(theater).subscribe(d =>{
        console.log("Theater of id: "+ theater.theaterId + " is deleted")
        this.toastr.showSuccess("Succefully Deleted!")
      });
    }
  }

}
