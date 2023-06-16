import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StarWarsPage } from './star-wars.page';

describe('StarWarsPage', () => {
  let component: StarWarsPage;
  let fixture: ComponentFixture<StarWarsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StarWarsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
