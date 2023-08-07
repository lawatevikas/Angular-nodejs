import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChashOnComponent } from './chash-on.component';

describe('ChashOnComponent', () => {
  let component: ChashOnComponent;
  let fixture: ComponentFixture<ChashOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChashOnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChashOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
