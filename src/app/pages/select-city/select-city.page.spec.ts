import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectCityPage } from './select-city.page';

describe('SelectCityPage', () => {
  let component: SelectCityPage;
  let fixture: ComponentFixture<SelectCityPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelectCityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
