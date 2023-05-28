import { TestBed } from '@angular/core/testing';

import { VehiculoVendidoService } from './vehiculo-vendido.service';

describe('VehiculoVendidoService', () => {
  let service: VehiculoVendidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehiculoVendidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
