import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSlogansComponent } from './all-slogans.component';

describe('AllSlogansComponent', () => {
  let component: AllSlogansComponent;
  let fixture: ComponentFixture<AllSlogansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSlogansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSlogansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
