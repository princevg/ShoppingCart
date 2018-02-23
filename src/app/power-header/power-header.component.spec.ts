import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerHeaderComponent } from './power-header.component';

describe('PowerHeaderComponent', () => {
  let component: PowerHeaderComponent;
  let fixture: ComponentFixture<PowerHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
