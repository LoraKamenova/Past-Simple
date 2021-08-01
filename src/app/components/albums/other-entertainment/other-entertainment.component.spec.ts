import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherEntertainmentComponent } from './other-entertainment.component';

describe('OtherEntertainmentComponent', () => {
  let component: OtherEntertainmentComponent;
  let fixture: ComponentFixture<OtherEntertainmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherEntertainmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherEntertainmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
