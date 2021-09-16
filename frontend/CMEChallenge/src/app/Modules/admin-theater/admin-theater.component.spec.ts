import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTheaterComponent } from './admin-theater.component';

describe('AdminTheaterComponent', () => {
  let component: AdminTheaterComponent;
  let fixture: ComponentFixture<AdminTheaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTheaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
