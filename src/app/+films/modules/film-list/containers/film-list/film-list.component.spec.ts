import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmListComponent } from './film-list.component';
import { FilmsCountComponent } from '../../components/films-count/films-count.component';
import { FilmsPaginationComponent } from '../../components/films-pagination/films-pagination.component';
import { FilmsTableComponent } from '../../components/films-table/films-table.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

xdescribe('FilmListComponent', () => {
  let component: FilmListComponent;
  let fixture: ComponentFixture<FilmListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmListComponent, FilmsCountComponent, FilmsPaginationComponent, FilmsTableComponent ],
      imports: [ReactiveFormsModule, FormsModule, RouterModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
