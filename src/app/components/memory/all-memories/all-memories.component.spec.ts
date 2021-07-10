import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMemoriesComponent } from './all-memories.component';

describe('AllMemoriesComponent', () => {
  let component: AllMemoriesComponent;
  let fixture: ComponentFixture<AllMemoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMemoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMemoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
