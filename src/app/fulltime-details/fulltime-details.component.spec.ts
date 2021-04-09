import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulltimeDetailsComponent } from './fulltime-details.component';

describe('FulltimeDetailsComponent', () => {
  let component: FulltimeDetailsComponent;
  let fixture: ComponentFixture<FulltimeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FulltimeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FulltimeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
