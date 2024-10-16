import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Artiste } from "../models/artiste.model"
import { ArtisteService } from "../services/artiste.service"

@Injectable({
  providedIn: 'root'
})
export class BientotResolver implements Resolve<Artiste[]> {
  constructor(private artistService: ArtisteService) {
  }
  resolve(): Observable<Artiste[]> {
    return this.artistService.findAll();
  }
}

// export class BientotResolver implements Resolve<Concert[]> {
//   constructor(private concertService: ConcertService) {
//   }
//   resolve(): Observable<Concert[]> {
//     return this.concertService.findAll();
//   }
// }
