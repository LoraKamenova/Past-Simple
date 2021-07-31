import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSlogansAdminComponent } from './all-slogans-admin.component';

describe('AdminSlogansComponent', () => {
  let component: AllSlogansAdminComponent;
  let fixture: ComponentFixture<AllSlogansAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSlogansAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSlogansAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
