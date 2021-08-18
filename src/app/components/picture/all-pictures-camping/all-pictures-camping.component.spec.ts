import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPicturesCampingComponent } from './all-pictures-camping.component';

describe('AllPicturesCampingComponent', () => {
  let component: AllPicturesCampingComponent;
  let fixture: ComponentFixture<AllPicturesCampingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPicturesCampingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPicturesCampingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
