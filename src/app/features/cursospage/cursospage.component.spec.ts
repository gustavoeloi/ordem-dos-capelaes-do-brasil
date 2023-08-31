import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursospageComponent } from './cursospage.component';

describe('CursospageComponent', () => {
  let component: CursospageComponent;
  let fixture: ComponentFixture<CursospageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursospageComponent]
    });
    fixture = TestBed.createComponent(CursospageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
