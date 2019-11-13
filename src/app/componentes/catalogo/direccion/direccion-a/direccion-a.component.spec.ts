import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionAComponent } from './direccion-a.component';

describe('DireccionAComponent', () => {
  let component: DireccionAComponent;
  let fixture: ComponentFixture<DireccionAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DireccionAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DireccionAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
