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
  isconnected: boolean = false

  constructor(private userService: UtilisateurService, private router: Router) {}

  ngOnInit() {
    if(localStorage.getItem('user_id') != null){
      this.isconnected = true
      this.userService.findById(Number(localStorage.getItem('user_id'))).subscribe(
        (data: Utilisateur) => {
          this.user = data
        },
        error => {
          console.error('Error fetching the user:', error);
        }
      )
    }else{
      this.isconnected = false
    }
  }

  onConnectButtonClick() {
    this.userService.connectUser(this.mail, this.password).subscribe(
      (data: Utilisateur) => {
        this.user = data;
        localStorage.setItem('user_id', this.user.id.toString())
        this.router.navigate(['/favoris'])
      },
      error => {
        console.error('Error connecting to user:', error);
      }
    );
  }

  onDisconnectButtonClick(){
    localStorage.removeItem('user_id')
    this.router.navigate(['/'])
  }
}
