import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoommateComponent } from './roommate.component';

describe('RoommateComponent', () => {
  let component: RoommateComponent;
  let fixture: ComponentFixture<RoommateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoommateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoommateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
