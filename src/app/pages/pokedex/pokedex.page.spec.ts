import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokedexPage } from './pokedex.page';

describe('PokedexPage', () => {
  let component: PokedexPage;
  let fixture: ComponentFixture<PokedexPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PokedexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
