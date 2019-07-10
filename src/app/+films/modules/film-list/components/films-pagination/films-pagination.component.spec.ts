import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsPaginationComponent } from './films-pagination.component';

describe('FilmsPaginationComponent', () => {
  let component: FilmsPaginationComponent;
  let fixture: ComponentFixture<FilmsPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
