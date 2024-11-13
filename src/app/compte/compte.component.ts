import { Component, OnInit } from '@angular/core';
import { Utilisateur } from "../models/utilisateur.model"
import { UtilisateurService } from "../services/utilisateur.service"
import { Router } from "@angular/router"

@Component({
  selector: "epf-compte",
  templateUrl: "./compte.component.html",
  styleUrls: ["./compte.component.scss"],
})
export class CompteComponent implements OnInit {
  user: Utilisateur | null = null
  mail: string = ''
  password: string = ''

  constructor(private userService: UtilisateurService, private router: Router) {}

  ngOnInit() {}

  onConnectButtonClick() {
    this.userService.connectUser(this.mail, this.password).subscribe(
      (data: Utilisateur) => {
        this.user = data;
        localStorage.setItem('user_id', this.user.id.toString())
        this.router.navigate(['/bientot'])
      },
      error => {
        console.error('Error fetching the user:', error);
      }
    );
  }
}
