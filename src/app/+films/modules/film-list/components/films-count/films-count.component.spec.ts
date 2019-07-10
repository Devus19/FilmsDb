import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsCountComponent } from './films-count.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('FilmsCountComponent', () => {
  let component: FilmsCountComponent;
  let fixture: ComponentFixture<FilmsCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsCountComponent ],
      imports: [ReactiveFormsModule, FormsModule]
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
