import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisteDetailsComponent } from './artiste-details.component';

describe('ArtisteDetailsComponent', () => {
  let component: ArtisteDetailsComponent;
  let fixture: ComponentFixture<ArtisteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtisteDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtisteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
