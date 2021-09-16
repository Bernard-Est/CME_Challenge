import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Theater, TheaterService } from 'src/app/Core/theater.service';

@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.scss']
})
export class TheaterComponent implements OnInit {

  Theaters : any[] = []
  Id : number = 0

  constructor(
    private router: Router,
    private theater : TheaterService
  ) { }

  ngOnInit(): void {
    this.getAllTheater()
  }

  GoPlaysOfThisTheater(id : number){
    this.Id = id
    //this.router.navigateByUrl(`/Main/theater/plays/plays/${this.Id}`).then
    this.router.navigate([`/Main/theater/plays/plays`],{
      queryParams : {
        id: this.Id
      }
    }).then()
  }

  getAllTheater(){
    this.theater.GetAll().subscribe(d => {
      this.Theaters = d
    })
    
  }
}
