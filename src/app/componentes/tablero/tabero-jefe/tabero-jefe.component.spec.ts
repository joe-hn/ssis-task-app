import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaberoJefeComponent } from './tabero-jefe.component';

describe('TaberoJefeComponent', () => {
  let component: TaberoJefeComponent;
  let fixture: ComponentFixture<TaberoJefeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaberoJefeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaberoJefeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
