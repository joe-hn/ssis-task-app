import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaSolicitudSalidaComponent } from './tarea-solicitud-salida.component';

describe('TareaSolicitudSalidaComponent', () => {
  let component: TareaSolicitudSalidaComponent;
  let fixture: ComponentFixture<TareaSolicitudSalidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareaSolicitudSalidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaSolicitudSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
