import { TestBed } from '@angular/core/testing';

import { MyappServicesService } from './myapp-services.service';

describe('MyappServicesService', () => {
  let service: MyappServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyappServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
