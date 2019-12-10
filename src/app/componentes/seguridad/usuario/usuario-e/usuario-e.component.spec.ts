import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioEComponent } from './usuario-e.component';

describe('UsuarioEComponent', () => {
  let component: UsuarioEComponent;
  let fixture: ComponentFixture<UsuarioEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
