import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUnsubpage1Component } from './user-unsubpage1.component';

describe('UserUnsubpage1Component', () => {
  let component: UserUnsubpage1Component;
  let fixture: ComponentFixture<UserUnsubpage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserUnsubpage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUnsubpage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
