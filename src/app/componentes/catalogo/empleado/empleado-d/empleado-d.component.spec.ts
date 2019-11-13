import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoDComponent } from './empleado-d.component';

describe('EmpleadoDComponent', () => {
  let component: EmpleadoDComponent;
  let fixture: ComponentFixture<EmpleadoDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
