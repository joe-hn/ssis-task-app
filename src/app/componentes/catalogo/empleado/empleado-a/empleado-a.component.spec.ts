import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoAComponent } from './empleado-a.component';

describe('EmpleadoAComponent', () => {
  let component: EmpleadoAComponent;
  let fixture: ComponentFixture<EmpleadoAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
