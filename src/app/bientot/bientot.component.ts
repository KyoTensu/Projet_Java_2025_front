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
  artists$: Observable<Artiste[]> = this._route.data.pipe(map((data) => data["artists"]))

  constructor(private _route: ActivatedRoute, private artistService: ArtisteService, private router: Router,) { }

}

// export class BientotComponent {
//   concert$: Observable<Concert[]> = this._route.data.pipe(map((data) => data["concerts"]))
//
//   constructor(private _route: ActivatedRoute, private concertService: ConcertService, private router: Router) {
//   }
//}
