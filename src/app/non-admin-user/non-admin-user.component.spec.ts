import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonAdminUserComponent } from './non-admin-user.component';

describe('NonAdminUserComponent', () => {
  let component: NonAdminUserComponent;
  let fixture: ComponentFixture<NonAdminUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonAdminUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonAdminUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
