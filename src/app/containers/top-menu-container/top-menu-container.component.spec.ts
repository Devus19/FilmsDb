import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenuContainerComponent } from './top-menu-container.component';

describe('TopMenuContainerComponent', () => {
  let component: TopMenuContainerComponent;
  let fixture: ComponentFixture<TopMenuContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopMenuContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMenuContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
