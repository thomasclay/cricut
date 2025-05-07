import { TestBed } from '@angular/core/testing';

import { SpaceFlightNewsService } from './space-flight-news.service';

describe('SpaceFlightNewsService', () => {
  let service: SpaceFlightNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaceFlightNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
