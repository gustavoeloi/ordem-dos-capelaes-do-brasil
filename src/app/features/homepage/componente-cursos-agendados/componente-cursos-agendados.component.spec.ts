import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCursosAgendadosComponent } from './componente-cursos-agendados.component';

describe('ComponenteCursosAgendadosComponent', () => {
  let component: ComponenteCursosAgendadosComponent;
  let fixture: ComponentFixture<ComponenteCursosAgendadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteCursosAgendadosComponent]
    });
    fixture = TestBed.createComponent(ComponenteCursosAgendadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
