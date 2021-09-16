import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPlaysComponent } from './admin-plays.component';

describe('AdminPlaysComponent', () => {
  let component: AdminPlaysComponent;
  let fixture: ComponentFixture<AdminPlaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPlaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPlaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
