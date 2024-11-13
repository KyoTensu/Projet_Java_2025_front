import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Concert } from "../models/concert.model"
import { ConcertService } from "../services/concert.service"

@Component({
  selector: 'epf-concert-details',
  templateUrl: './concert-details.component.html',
  styleUrls: ['./concert-details.component.scss']
})
export class ConcertDetailsComponent implements OnInit {
  concert: Concert = ({} as any) as Concert
  id : string | null = null

  constructor(private concertService: ConcertService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {this.id = params.get('id')})
    this.concertService.findById(Number(this.id)).subscribe(
      (data: Concert) => {
        this.concert = data;
      },
      error => {
        console.error('Error fetching the concert:', error);
      }
    );
  }

}
