import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRadioComponent } from './user-radio.component';

describe('UserRadioComponent', () => {
  let component: UserRadioComponent;
  let fixture: ComponentFixture<UserRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
