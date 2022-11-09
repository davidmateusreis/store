import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCityComponent } from './popup-city.component';

describe('PopupCityComponent', () => {
  let component: PopupCityComponent;
  let fixture: ComponentFixture<PopupCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupCityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
