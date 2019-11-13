import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoAComponent } from './cargo-a.component';

describe('CargoAComponent', () => {
  let component: CargoAComponent;
  let fixture: ComponentFixture<CargoAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargoAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
