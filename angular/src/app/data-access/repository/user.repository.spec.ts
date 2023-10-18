import {TestBed} from '@angular/core/testing';

import {UserRepository} from './user.repository';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('UserRepositoryService', () => {
  let repository: UserRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    repository = TestBed.inject(UserRepository);
  });

  it('should be created', () => {
    expect(repository).toBeTruthy();
  });
});
