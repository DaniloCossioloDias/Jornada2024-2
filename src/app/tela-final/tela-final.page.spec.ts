import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaFinalPage } from './tela-final.page';

describe('TelaFinalPage', () => {
  let component: TelaFinalPage;
  let fixture: ComponentFixture<TelaFinalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaFinalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
