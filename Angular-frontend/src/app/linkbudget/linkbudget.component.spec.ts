import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkbudgetComponent } from './linkbudget.component';

describe('LinkbudgetComponent', () => {
  let component: LinkbudgetComponent;
  let fixture: ComponentFixture<LinkbudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkbudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkbudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
