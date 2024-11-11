import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LieuxCardsComponent } from './lieux-cards.component';

describe('LieuxCardsComponent', () => {
  let component: LieuxCardsComponent;
  let fixture: ComponentFixture<LieuxCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LieuxCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LieuxCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
