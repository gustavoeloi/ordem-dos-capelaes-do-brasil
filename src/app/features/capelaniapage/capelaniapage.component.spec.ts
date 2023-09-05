import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapelaniapageComponent } from './capelaniapage.component';

describe('CapelaniapageComponent', () => {
  let component: CapelaniapageComponent;
  let fixture: ComponentFixture<CapelaniapageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapelaniapageComponent]
    });
    fixture = TestBed.createComponent(CapelaniapageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
