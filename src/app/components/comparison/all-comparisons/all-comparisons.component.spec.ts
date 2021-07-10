import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllComparisonsComponent } from './all-comparisons.component';

describe('AllComparisonsComponent', () => {
  let component: AllComparisonsComponent;
  let fixture: ComponentFixture<AllComparisonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllComparisonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllComparisonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
