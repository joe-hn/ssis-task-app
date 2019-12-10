import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolDComponent } from './rol-d.component';

describe('RolDComponent', () => {
  let component: RolDComponent;
  let fixture: ComponentFixture<RolDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
