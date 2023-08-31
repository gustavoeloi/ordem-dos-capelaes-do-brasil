import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCapelaniasComponent } from './componente-capelanias.component';

describe('ComponenteCapelaniasComponent', () => {
  let component: ComponenteCapelaniasComponent;
  let fixture: ComponentFixture<ComponenteCapelaniasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteCapelaniasComponent]
    });
    fixture = TestBed.createComponent(ComponenteCapelaniasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
