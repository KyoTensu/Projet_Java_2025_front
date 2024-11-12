import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { Lieu } from "../models/lieu.model"

@Injectable({
  providedIn: 'root'
})
export class LieuService {

  constructor(private http: HttpClient) {
  }

  private lieuxUrl = "http://localhost:8080/lieux"

  findAll(): Observable<Lieu[]> {
    return this.http.get<Lieu[]>(this.lieuxUrl)
  }
}
