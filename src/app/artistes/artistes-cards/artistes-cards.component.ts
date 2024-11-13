// artistes-cards.component.ts
import { Component, Input } from '@angular/core';
import { Artiste } from '../../models/artiste.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-artistes-cards',
  templateUrl: './artistes-cards.component.html',
  styleUrls: ['./artistes-cards.component.scss']
})
export class ArtistesCardsComponent {
  @Input() artist!: Artiste;

  constructor(private router: Router) {}

  goToArtistDetail() {
    this.router.navigate(['/artistes', this.artist.id]);
  }
}
