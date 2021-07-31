import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllComparisonsAdminComponent } from './all-comparisons-admin.component';

describe('AllComparisonsAdminComponent', () => {
  let component: AllComparisonsAdminComponent;
  let fixture: ComponentFixture<AllComparisonsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllComparisonsAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllComparisonsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
