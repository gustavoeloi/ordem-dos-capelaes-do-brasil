import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobrepageComponent } from './sobrepage.component';

describe('SobrepageComponent', () => {
  let component: SobrepageComponent;
  let fixture: ComponentFixture<SobrepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SobrepageComponent]
    });
    fixture = TestBed.createComponent(SobrepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
