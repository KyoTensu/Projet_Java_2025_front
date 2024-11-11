import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { Concert } from "../models/concert.model"

@Injectable({
  providedIn: 'root'
})
export class ConcertService {

  constructor(private http: HttpClient) { }

  private concertsUrl = "http://localhost:8080/bientot"

  findAll(): Observable<Concert[]> {
    return this.http.get<Concert[]>(this.concertsUrl)
  }
}
