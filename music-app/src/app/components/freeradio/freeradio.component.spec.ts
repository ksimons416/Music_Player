import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeradioComponent } from './freeradio.component';

describe('FreeradioComponent', () => {
  let component: FreeradioComponent;
  let fixture: ComponentFixture<FreeradioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeradioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeradioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
