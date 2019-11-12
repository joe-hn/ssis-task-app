import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaSolicitudComponent } from './tarea-solicitud.component';

describe('TareaSolicitudComponent', () => {
  let component: TareaSolicitudComponent;
  let fixture: ComponentFixture<TareaSolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareaSolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
