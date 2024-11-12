// artistes-cards.component.ts
import { Component, Input } from '@angular/core';
import { Artiste } from '../../models/artiste.model';


@Component({
  selector: 'app-artistes-cards',
  templateUrl: './artistes-cards.component.html',
  styleUrls: ['./artistes-cards.component.scss']
})
export class ArtistesCardsComponent {
  @Input() artist!: Artiste;
}
