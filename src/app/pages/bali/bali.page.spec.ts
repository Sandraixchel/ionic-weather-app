import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaliPage } from './bali.page';

describe('BaliPage', () => {
  let component: BaliPage;
  let fixture: ComponentFixture<BaliPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BaliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
