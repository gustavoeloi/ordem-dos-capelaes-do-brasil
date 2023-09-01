import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteSobreHomeComponent } from './componente-sobre-home.component';

describe('ComponenteSobreHomeComponent', () => {
  let component: ComponenteSobreHomeComponent;
  let fixture: ComponentFixture<ComponenteSobreHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteSobreHomeComponent]
    });
    fixture = TestBed.createComponent(ComponenteSobreHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
