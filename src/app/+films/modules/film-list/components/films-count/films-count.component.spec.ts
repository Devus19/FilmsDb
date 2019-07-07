import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsCountComponent } from './films-count.component';

describe('FilmsCountComponent', () => {
  let component: FilmsCountComponent;
  let fixture: ComponentFixture<FilmsCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
