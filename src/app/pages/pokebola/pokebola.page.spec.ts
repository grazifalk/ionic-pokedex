import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokebolaPage } from './pokebola.page';

describe('PokebolaPage', () => {
  let component: PokebolaPage;
  let fixture: ComponentFixture<PokebolaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PokebolaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
