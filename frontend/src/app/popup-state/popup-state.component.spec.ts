import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupStateComponent } from './popup-state.component';

describe('PopupStateComponent', () => {
  let component: PopupStateComponent;
  let fixture: ComponentFixture<PopupStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupStateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
