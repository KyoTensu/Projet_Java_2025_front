import { Component, OnInit } from '@angular/core';
import { Concert } from "../models/concert.model"
import { ConcertService } from "../services/concert.service"
import { UtilisateurService } from "../services/utilisateur.service"
import { dateInputsHaveChanged } from "@angular/material/datepicker/datepicker-input-base"
import { Utilisateur } from "../models/utilisateur.model"

@Component({
  selector: 'epf-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.scss']
})
export class FavorisComponent implements OnInit {
  concerts: Concert[] = []

  constructor(private userService: UtilisateurService) { }

  ngOnInit(): void {
    this.userService.findById(Number(localStorage.getItem('user_id'))).subscribe(
      (data: Utilisateur) => {
        this.concerts = data.concerts
      },
      error => {
        console.error('Error fetching the favorites:', error);
      }
    )
  }

}
