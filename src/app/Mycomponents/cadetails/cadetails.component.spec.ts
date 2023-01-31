import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadetailsComponent } from './cadetails.component';

describe('CadetailsComponent', () => {
  let component: CadetailsComponent;
  let fixture: ComponentFixture<CadetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
