import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderInputsComponent } from './order-inputs.component';

describe('OrderInputsComponent', () => {
  let component: OrderInputsComponent;
  let fixture: ComponentFixture<OrderInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
