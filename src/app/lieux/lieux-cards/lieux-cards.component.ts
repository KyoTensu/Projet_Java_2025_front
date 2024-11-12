import { Component, Input, OnInit } from '@angular/core';
import { Lieu } from '../../models/lieu.model';


@Component({
  selector: 'app-lieux-cards',
  templateUrl: './lieux-cards.component.html',
  styleUrls: ['./lieux-cards.component.scss']
})
export class LieuxCardsComponent  {

  @Input() lieu!: Lieu;

}
