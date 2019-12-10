import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioCeComponent } from './usuario-ce.component';

describe('UsuarioCeComponent', () => {
  let component: UsuarioCeComponent;
  let fixture: ComponentFixture<UsuarioCeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioCeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioCeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
