import { TestBed } from '@angular/core/testing';

import { FilmsFacadeService } from './films-facade.service';

describe('FilmsFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilmsFacadeService = TestBed.get(FilmsFacadeService);
    expect(service).toBeTruthy();
  });
});
