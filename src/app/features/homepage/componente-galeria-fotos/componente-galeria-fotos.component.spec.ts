import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteGaleriaFotosComponent } from './componente-galeria-fotos.component';

describe('ComponenteGaleriaFotosComponent', () => {
  let component: ComponenteGaleriaFotosComponent;
  let fixture: ComponentFixture<ComponenteGaleriaFotosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteGaleriaFotosComponent]
    });
    fixture = TestBed.createComponent(ComponenteGaleriaFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
