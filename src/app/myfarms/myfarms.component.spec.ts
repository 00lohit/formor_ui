import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfarmsComponent } from './myfarms.component';

describe('MyfarmsComponent', () => {
  let component: MyfarmsComponent;
  let fixture: ComponentFixture<MyfarmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyfarmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfarmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
