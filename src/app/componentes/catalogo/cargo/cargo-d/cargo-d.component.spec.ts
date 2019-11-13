import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoDComponent } from './cargo-d.component';

describe('CargoDComponent', () => {
  let component: CargoDComponent;
  let fixture: ComponentFixture<CargoDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargoDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
