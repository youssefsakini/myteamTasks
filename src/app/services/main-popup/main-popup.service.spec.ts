import { TestBed } from '@angular/core/testing';

import { MainPopupService } from './main-popup.service';

describe('MainPopupService', () => {
  let service: MainPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
