import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Plays, PlaysService } from 'src/app/Core/plays.service';
import { Theater, TheaterService } from 'src/app/Core/theater.service';
import { ToastService } from 'src/app/Core/toast.service';

@Component({
  selector: 'app-admin-plays',
  templateUrl: './admin-plays.component.html',
  styleUrls: ['./admin-plays.component.scss']
})
export class AdminPlaysComponent implements OnInit {

  GetAllPlays = new Subscription();
  data: Plays[] = [];
  TheaterList: Theater[] = [];

  constructor(
    private plays: PlaysService,
    private toastr : ToastService,
    private theater : TheaterService
  ) { }

  ngOnInit(): void {
    this.getAllTheater()
    this.fetchData()
  }

  getAllTheater(){
    this.theater.GetAll().subscribe(d => {
      this.TheaterList = d
    })
  }

  ngOnDestroy(): void {
    this.GetAllPlays.unsubscribe();
  }

  fetchData() {
    this.GetAllPlays = this.plays.GetAll().subscribe((result) => {
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
      // if (this.data.filter((e) => e.playsId).length > 0) {
      //   return;
      // }
    }
    const record = new Plays();
    record.playsId;
    this.data.unshift(record);
  }

  Edit(playObj: Plays) {

    this.plays.EditPlays(playObj).subscribe((result) => {
      if (result != null) {
        console.log("Play Done")
        this.toastr.showSuccess("Succefully added!")
        this.data.splice(this.data.indexOf(playObj), 1);
        const newEntry: any = result;
        this.data.unshift(newEntry);
      }
    });
  }

  Delete(play: Plays) {
    if(play != null){
      var Id = play.playsId;
      this.plays.DeletePlays(play).subscribe(d =>{
        console.log("Play of id: "+ play.playsId + " is deleted")
        this.toastr.showSuccess("Succefully Deleted!")
      });
    }
  }

}
