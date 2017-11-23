import { TestBed, inject } from '@angular/core/testing';

import { NgVersionInterceptorService } from './ng-version-interceptor.service';

describe('NgVersionInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgVersionInterceptorService]
    });
  });

  it('should be created', inject([NgVersionInterceptorService], (service: NgVersionInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
