import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDireccionEComponent } from './tipo-direccion-e.component';

describe('TipoDireccionEComponent', () => {
  let component: TipoDireccionEComponent;
  let fixture: ComponentFixture<TipoDireccionEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoDireccionEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoDireccionEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
