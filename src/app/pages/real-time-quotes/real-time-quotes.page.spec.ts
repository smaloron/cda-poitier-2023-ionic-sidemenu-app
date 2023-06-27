import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RealTimeQuotesPage } from './real-time-quotes.page';

describe('RealTimeQuotesPage', () => {
  let component: RealTimeQuotesPage;
  let fixture: ComponentFixture<RealTimeQuotesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RealTimeQuotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
