import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatopageComponent } from './contatopage.component';

describe('ContatopageComponent', () => {
  let component: ContatopageComponent;
  let fixture: ComponentFixture<ContatopageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContatopageComponent]
    });
    fixture = TestBed.createComponent(ContatopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
