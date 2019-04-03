import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUnsubpage2Component } from './user-unsubpage2.component';

describe('UserUnsubpage2Component', () => {
  let component: UserUnsubpage2Component;
  let fixture: ComponentFixture<UserUnsubpage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserUnsubpage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUnsubpage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
