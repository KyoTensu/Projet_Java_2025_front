import { Component, OnInit } from '@angular/core';
import { map, Observable } from "rxjs"
import { Artiste } from "../models/artiste.model"
import { ActivatedRoute, Router } from "@angular/router"
import { StudentService } from "../services/student.service"
import { ArtisteService } from "../services/artiste.service"
import { Concert } from "../models/concert.model"
import { ConcertService } from "../services/concert.service"

@Component({
  selector: 'epf-bientot',
  templateUrl: './bientot.component.html',
  styleUrls: ['./bientot.component.scss']
})
export class BientotComponent {
  concerts: Concert[] = []
  id: Number | null = null

  constructor(private route: ActivatedRoute, private concertService: ConcertService, private router: Router) { }

  ngOnInit(): void{
    this.concertService.findAll().subscribe(
      (data: Concert[]) => {
        this.concerts = data;
      },
      error => {
        console.error('Error fetching concerts:', error);
      }
    );
  }

  onConcertClick(id: Number){
    this.router.navigate(['/concerts/'+id])
  }

  protected readonly Number = Number
}

// export class BientotComponent {
//   concert$: Observable<Concert[]> = this._route.data.pipe(map((data) => data["concerts"]))
//
//   constructor(private _route: ActivatedRoute, private concertService: ConcertService, private router: Router) {
//   }
//}
