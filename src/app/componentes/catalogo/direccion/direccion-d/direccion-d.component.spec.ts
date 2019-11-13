import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionDComponent } from './direccion-d.component';

describe('DireccionDComponent', () => {
  let component: DireccionDComponent;
  let fixture: ComponentFixture<DireccionDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DireccionDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DireccionDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
