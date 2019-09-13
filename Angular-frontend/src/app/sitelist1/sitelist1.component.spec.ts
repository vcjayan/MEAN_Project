import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sitelist1Component } from './sitelist1.component';

describe('Sitelist1Component', () => {
  let component: Sitelist1Component;
  let fixture: ComponentFixture<Sitelist1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sitelist1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sitelist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
