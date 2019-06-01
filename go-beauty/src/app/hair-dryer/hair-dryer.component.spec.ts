import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HairDryerComponent } from './hair-dryer.component';

describe('HairDryerComponent', () => {
  let component: HairDryerComponent;
  let fixture: ComponentFixture<HairDryerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HairDryerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HairDryerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
