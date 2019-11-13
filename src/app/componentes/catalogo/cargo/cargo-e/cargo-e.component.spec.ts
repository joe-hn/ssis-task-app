import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoEComponent } from './cargo-e.component';

describe('CargoEComponent', () => {
  let component: CargoEComponent;
  let fixture: ComponentFixture<CargoEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargoEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
