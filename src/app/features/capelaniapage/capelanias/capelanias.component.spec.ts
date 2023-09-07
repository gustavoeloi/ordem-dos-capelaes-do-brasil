import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapelaniasComponent } from './capelanias.component';

describe('CapelaniasComponent', () => {
  let component: CapelaniasComponent;
  let fixture: ComponentFixture<CapelaniasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapelaniasComponent]
    });
    fixture = TestBed.createComponent(CapelaniasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
