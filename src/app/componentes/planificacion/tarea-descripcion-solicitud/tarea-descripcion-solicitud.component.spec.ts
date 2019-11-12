import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaDescripcionSolicitudComponent } from './tarea-descripcion-solicitud.component';

describe('TareaDescripcionSolicitudComponent', () => {
  let component: TareaDescripcionSolicitudComponent;
  let fixture: ComponentFixture<TareaDescripcionSolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareaDescripcionSolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaDescripcionSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
