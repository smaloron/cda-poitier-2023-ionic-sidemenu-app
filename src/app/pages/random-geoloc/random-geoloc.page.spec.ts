import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RandomGeolocPage } from './random-geoloc.page';

describe('RandomGeolocPage', () => {
  let component: RandomGeolocPage;
  let fixture: ComponentFixture<RandomGeolocPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RandomGeolocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
