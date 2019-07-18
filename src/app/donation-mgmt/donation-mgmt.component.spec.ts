import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationMgmtComponent } from './donation-mgmt.component';

describe('DonationMgmtComponent', () => {
  let component: DonationMgmtComponent;
  let fixture: ComponentFixture<DonationMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
