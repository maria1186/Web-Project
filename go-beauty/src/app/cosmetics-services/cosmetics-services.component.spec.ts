import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmeticsServicesComponent } from './cosmetics-services.component';

describe('CosmeticsServicesComponent', () => {
  let component: CosmeticsServicesComponent;
  let fixture: ComponentFixture<CosmeticsServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosmeticsServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmeticsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
