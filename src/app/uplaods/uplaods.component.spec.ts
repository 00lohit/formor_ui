import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UplaodsComponent } from './uplaods.component';

describe('UplaodsComponent', () => {
  let component: UplaodsComponent;
  let fixture: ComponentFixture<UplaodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UplaodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UplaodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
