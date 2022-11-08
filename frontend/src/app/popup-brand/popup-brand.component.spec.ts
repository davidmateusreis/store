import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupBrandComponent } from './popup-brand.component';

describe('PopupBrandComponent', () => {
  let component: PopupBrandComponent;
  let fixture: ComponentFixture<PopupBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupBrandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
