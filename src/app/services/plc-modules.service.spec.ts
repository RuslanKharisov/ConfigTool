import { TestBed } from '@angular/core/testing';

import { PlcModulesService } from './plc-modules.service';

describe('PlcModulesService', () => {
  let service: PlcModulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlcModulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
