import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { Artiste } from "../models/artiste.model"

@Injectable({
  providedIn: 'root'
})
export class ArtisteService {

  constructor(private http: HttpClient) {
  }

  private artistsUrl = "http://localhost:8080/artistes"

  findAll(): Observable<Artiste[]> {
    return this.http.get<Artiste[]>(this.artistsUrl)
  }
}
