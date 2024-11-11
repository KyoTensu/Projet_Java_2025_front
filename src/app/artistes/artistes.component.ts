// artistes.component.ts
import { Component } from '@angular/core';
import { Artiste } from '../models/artiste.model';
import { ArtisteService } from '../services/artiste.service';


@Component({
  selector: 'app-artistes',
  templateUrl: './artistes.component.html',
  styleUrls: ['./artistes.component.scss']
})
export class ArtistesComponent {
  artists: Artiste[] = [];

  constructor(private artisteService: ArtisteService) {}

  ngOnInit(): void {
    this.artisteService.findAll().subscribe(
      (data: Artiste[]) => {
        this.artists = data;
      },
      error => {
        console.error('Error fetching artists:', error);
      }
    );
  }
}
