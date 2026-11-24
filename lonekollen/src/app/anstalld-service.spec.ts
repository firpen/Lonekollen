import { TestBed } from '@angular/core/testing';

import { AnstalldService } from './anstalld-service';

describe('AnstalldService', () => {
  let service: AnstalldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnstalldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
