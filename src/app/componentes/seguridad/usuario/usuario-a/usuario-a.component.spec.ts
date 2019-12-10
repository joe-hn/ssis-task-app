import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioAComponent } from './usuario-a.component';

describe('UsuarioAComponent', () => {
  let component: UsuarioAComponent;
  let fixture: ComponentFixture<UsuarioAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
