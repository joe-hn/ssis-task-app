import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoEComponent } from './empleado-e.component';

describe('EmpleadoEComponent', () => {
  let component: EmpleadoEComponent;
  let fixture: ComponentFixture<EmpleadoEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
