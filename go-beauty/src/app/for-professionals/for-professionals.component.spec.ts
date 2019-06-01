import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForProfessionalsComponent } from './for-professionals.component';

describe('ForProfessionalsComponent', () => {
  let component: ForProfessionalsComponent;
  let fixture: ComponentFixture<ForProfessionalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForProfessionalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForProfessionalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
