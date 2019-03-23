import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { SiteeditComponent } from './siteedit.component';

describe('SiteeditComponent', () => {
  let component: SiteeditComponent;
  let fixture: ComponentFixture<SiteeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
