import { TestBed } from '@angular/core/testing';

import { RxjsOperatorsService } from './rxjs-operators.service';

describe('RxjsOperatorsService', () => {
  let service: RxjsOperatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxjsOperatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
