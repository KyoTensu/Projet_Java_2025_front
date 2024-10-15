import { TestBed } from '@angular/core/testing';

import { BientotResolver } from './bientot.resolver';

describe('BientotResolver', () => {
  let resolver: BientotResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(BientotResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
