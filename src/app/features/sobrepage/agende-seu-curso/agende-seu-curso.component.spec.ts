import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendeSeuCursoComponent } from './agende-seu-curso.component';

describe('AgendeSeuCursoComponent', () => {
  let component: AgendeSeuCursoComponent;
  let fixture: ComponentFixture<AgendeSeuCursoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgendeSeuCursoComponent]
    });
    fixture = TestBed.createComponent(AgendeSeuCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
