import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadridetailsComponent } from './badridetails.component';

describe('BadridetailsComponent', () => {
  let component: BadridetailsComponent;
  let fixture: ComponentFixture<BadridetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadridetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadridetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
