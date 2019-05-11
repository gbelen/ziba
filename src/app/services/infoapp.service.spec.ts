import { TestBed } from '@angular/core/testing';

import { InfoappService } from './infoapp.service';

describe('InfoappService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoappService = TestBed.get(InfoappService);
    expect(service).toBeTruthy();
  });
});
