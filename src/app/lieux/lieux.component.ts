import { Component, OnInit } from '@angular/core';
import { LieuService } from '../services/lieu.service';
import { Lieu } from '../models/lieu.model';

@Component({
  selector: 'app-lieux',
  templateUrl: './lieux.component.html',
  styleUrls: ['./lieux.component.scss']
})
export class LieuxComponent {

  lieux: Lieu[] = [];


  constructor(private lieuService: LieuService) {}

  ngOnInit(): void {
    this.lieuService.findAll().subscribe(
      (data: Lieu[]) => {
        this.lieux = data;
      },
      error => {
        console.error('Error fetching lieux:', error);
      }
    );
  }

}
