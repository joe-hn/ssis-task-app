import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDireccionAComponent } from './tipo-direccion-a.component';

describe('TipoDireccionAComponent', () => {
  let component: TipoDireccionAComponent;
  let fixture: ComponentFixture<TipoDireccionAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoDireccionAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoDireccionAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
