import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDireccionDComponent } from './tipo-direccion-d.component';

describe('TipoDireccionDComponent', () => {
  let component: TipoDireccionDComponent;
  let fixture: ComponentFixture<TipoDireccionDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoDireccionDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoDireccionDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
