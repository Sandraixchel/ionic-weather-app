import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MexicoCityPage } from './mexico-city.page';

describe('MexicoCityPage', () => {
  let component: MexicoCityPage;
  let fixture: ComponentFixture<MexicoCityPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MexicoCityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
