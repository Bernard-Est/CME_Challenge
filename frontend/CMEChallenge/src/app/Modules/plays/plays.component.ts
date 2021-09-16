import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plays, PlaysService } from 'src/app/Core/plays.service';

@Component({
  selector: 'app-plays',
  templateUrl: './plays.component.html',
  styleUrls: ['./plays.component.scss']
})
export class PlaysComponent implements OnInit {

  Id: number = 0
  Playss : Plays[] = []

  constructor(
    private routeAct : ActivatedRoute,
    private plays : PlaysService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.routeAct.queryParams.subscribe((d)=>{
      this.Id = d.id;
  })
  this.GetPlaysByTheaterId()
  }

  GetPlaysByTheaterId(){
    this.plays.GetByTheaterId(this.Id).subscribe(d => {
      this.Playss = d
    })
  }

  GoToReservation(playsId : number){
    this.router.navigate([`/Main/theater/plays/seats/seats`],{
      queryParams : {
        id: playsId
      }
    }).then()
  
  }

}
