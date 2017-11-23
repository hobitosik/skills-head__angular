import { TestBed, inject } from '@angular/core/testing';

import { ExitNosaveGuardService } from './exit-nosave-guard.service';

describe('ExitNosaveGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExitNosaveGuardService]
    });
  });

  it('should be created', inject([ExitNosaveGuardService], (service: ExitNosaveGuardService) => {
    expect(service).toBeTruthy();
  }));
});
