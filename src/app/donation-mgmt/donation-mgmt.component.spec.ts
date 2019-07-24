import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationmgmtComponent } from './donation-mgmt.component';

describe('DonationMgmtComponent', () => {
  let component: DonationmgmtComponent;
  let fixture: ComponentFixture<DonationmgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationmgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationmgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
