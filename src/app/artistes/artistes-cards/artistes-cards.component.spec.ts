import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistesCardsComponent } from './artistes-cards.component';

describe('ArtistesCardsComponent', () => {
  let component: ArtistesCardsComponent;
  let fixture: ComponentFixture<ArtistesCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistesCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
