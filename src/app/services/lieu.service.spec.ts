import { TestBed } from '@angular/core/testing';

import { LieuService } from './lieu.service';

describe('Lieuervice', () => {
  let service: LieuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LieuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
