import { TestBed } from '@angular/core/testing';

import { FilmsFacadeService } from './films-facade.service';
import { HttpClientModule } from '@angular/common/http';

xdescribe('FilmsFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: FilmsFacadeService = TestBed.get(FilmsFacadeService);
    expect(service).toBeTruthy();
  });
});
