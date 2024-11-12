import { Component, OnInit } from '@angular/core';
import { Artiste } from "../models/artiste.model"
import { ArtisteService } from "../services/artiste.service"
import { ArtistesComponent } from "../artistes/artistes.component"
import { Nationalite } from "../models/nationalite.model"

@Component({
  selector: 'epf-artiste-details',
  templateUrl: './artiste-details.component.html',
  styleUrls: ['./artiste-details.component.scss']
})
export class ArtisteDetailsComponent implements OnInit {
  artiste: Artiste = ({} as any) as Artiste

  constructor(private artisteService: ArtisteService) { }

  ngOnInit(): void {
    this.artisteService.findbyId(2).subscribe(
      (data: Artiste) => {
        this.artiste = data;
      },
      error => {
        console.error('Error fetching the artist:', error);
      }
    );
    console.log(this.artiste)
  }

}
