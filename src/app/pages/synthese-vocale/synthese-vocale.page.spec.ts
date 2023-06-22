import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SyntheseVocalePage } from './synthese-vocale.page';

describe('SyntheseVocalePage', () => {
  let component: SyntheseVocalePage;
  let fixture: ComponentFixture<SyntheseVocalePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SyntheseVocalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
