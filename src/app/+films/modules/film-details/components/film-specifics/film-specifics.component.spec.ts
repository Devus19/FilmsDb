import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmSpecificsComponent } from './film-specifics.component';

xdescribe('FilmSpecificsComponent', () => {
  let component: FilmSpecificsComponent;
  let fixture: ComponentFixture<FilmSpecificsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmSpecificsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmSpecificsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
