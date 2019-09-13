import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteloadingComponent } from './siteloading.component';

describe('SiteloadingComponent', () => {
  let component: SiteloadingComponent;
  let fixture: ComponentFixture<SiteloadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteloadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteloadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
