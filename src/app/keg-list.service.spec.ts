import { TestBed, inject } from '@angular/core/testing';

import { KegListService } from './keg-list.service';

describe('KegListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KegListService]
    });
  });

  it('should be created', inject([KegListService], (service: KegListService) => {
    expect(service).toBeTruthy();
  }));
});
