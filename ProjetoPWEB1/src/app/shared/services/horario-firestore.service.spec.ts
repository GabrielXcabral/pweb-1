import { TestBed } from '@angular/core/testing';

import { HorarioFirestoreService } from './horario-firestore.service';

describe('HorarioFirestoreService', () => {
  let service: HorarioFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HorarioFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
