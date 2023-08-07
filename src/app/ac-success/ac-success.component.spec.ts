import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcSuccessComponent } from './ac-success.component';

describe('AcSuccessComponent', () => {
  let component: AcSuccessComponent;
  let fixture: ComponentFixture<AcSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
