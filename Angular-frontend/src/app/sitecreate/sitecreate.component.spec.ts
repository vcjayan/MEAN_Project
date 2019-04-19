import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitecreateComponent } from './sitecreate.component';

describe('SitecreateComponent', () => {
  let component: SitecreateComponent;
  let fixture: ComponentFixture<SitecreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitecreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
