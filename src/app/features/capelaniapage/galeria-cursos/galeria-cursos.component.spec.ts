import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaCursosComponent } from './galeria-cursos.component';

describe('GaleriaCursosComponent', () => {
  let component: GaleriaCursosComponent;
  let fixture: ComponentFixture<GaleriaCursosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GaleriaCursosComponent]
    });
    fixture = TestBed.createComponent(GaleriaCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
