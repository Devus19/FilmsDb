import { TestBed } from '@angular/core/testing';

import { FilmsService } from './films.service';
import { HttpClientModule } from '@angular/common/http';

describe('FilmsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: FilmsService = TestBed.get(FilmsService);
    expect(service).toBeTruthy();
  });
});
