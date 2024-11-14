import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { Utilisateur } from "../models/utilisateur.model"

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }

  private userURL = "http://localhost:8080/utilisateurs"

  connectUser(mail: string, password: string): Observable<Utilisateur>{
    return this.http.get<Utilisateur>(this.userURL+"/authentification/"+mail+"/"+password)
  }

  findById(id: Number): Observable<Utilisateur>{
    return this.http.get<Utilisateur>(this.userURL+"/"+id)
  }
}
