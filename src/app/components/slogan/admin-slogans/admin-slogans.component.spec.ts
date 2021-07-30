import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSlogansComponent } from './admin-slogans.component';

describe('AdminSlogansComponent', () => {
  let component: AdminSlogansComponent;
  let fixture: ComponentFixture<AdminSlogansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSlogansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSlogansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
