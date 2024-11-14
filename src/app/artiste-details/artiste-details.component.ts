import { Component, OnInit } from '@angular/core';
import { Artiste } from "../models/artiste.model"
import { ArtisteService } from "../services/artiste.service"
import { ArtistesComponent } from "../artistes/artistes.component"
import { Nationalite } from "../models/nationalite.model"
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'epf-artiste-details',
  templateUrl: './artiste-details.component.html',
  styleUrls: ['./artiste-details.component.scss']
})
export class ArtisteDetailsComponent implements OnInit {
  artiste: Artiste = ({} as any) as Artiste
  id : string | null = null

  constructor(private artisteService: ArtisteService, private route : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {this.id = params.get('id')})
    this.artisteService.findbyId(Number(this.id)).subscribe(
      (data: Artiste) => {
        this.artiste = data;
      },
      error => {
        console.error('Error fetching the artist:', error);
      }
    );
  }

  onConcertClick(id: Number){
    this.router.navigate(['/concerts/'+id])
  }

  protected readonly Number = Number

}
