import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnfestoPage } from './enfesto.page';

describe('EnfestoPage', () => {
  let component: EnfestoPage;
  let fixture: ComponentFixture<EnfestoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfestoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
