import {TestBed} from '@angular/core/testing';

import {SectorRepository} from './sector.repository';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('SectorService', () => {
  let service: SectorRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SectorRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
