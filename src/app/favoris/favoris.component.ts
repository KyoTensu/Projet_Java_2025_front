import { Component, OnInit } from '@angular/core';
import { Concert } from "../models/concert.model"
import { ConcertService } from "../services/concert.service"
import { UtilisateurService } from "../services/utilisateur.service"
import { dateInputsHaveChanged } from "@angular/material/datepicker/datepicker-input-base"
import { Utilisateur } from "../models/utilisateur.model"
import { Router } from "@angular/router"

@Component({
  selector: 'epf-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.scss']
})
export class FavorisComponent implements OnInit {
  concerts: Concert[] = []
  id: Number | null = null

  constructor(private userService: UtilisateurService, private router: Router) { }

  ngOnInit(): void {
    console.log("id du user :"+localStorage.getItem('user_id'))
    if(localStorage.getItem('user_id') != null){
      this.userService.findById(Number(localStorage.getItem('user_id'))).subscribe(
        (data: Utilisateur) => {
          this.concerts = data.concerts
        },
        error => {
          console.error('Error fetching the favorites:', error);
        }
      )
    }
    else{
      this.router.navigate(['/compte'])
    }
  }

  onConcertClick(id: Number){
    this.router.navigate(['/concerts/'+id])
  }

  protected readonly Number = Number
}
