import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyGroupsComponent } from './beauty-groups.component';

describe('BeautyGroupsComponent', () => {
  let component: BeautyGroupsComponent;
  let fixture: ComponentFixture<BeautyGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeautyGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeautyGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
