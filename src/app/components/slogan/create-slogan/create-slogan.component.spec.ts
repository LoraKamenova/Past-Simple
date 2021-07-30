import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSloganComponent } from './create-slogan.component';

describe('AddSloganComponent', () => {
  let component: CreateSloganComponent;
  let fixture: ComponentFixture<CreateSloganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSloganComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSloganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
