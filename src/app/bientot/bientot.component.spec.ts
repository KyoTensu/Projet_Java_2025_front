import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BientotComponent } from './bientot.component';

describe('BientotComponent', () => {
  let component: BientotComponent;
  let fixture: ComponentFixture<BientotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BientotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BientotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
