import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupClientComponent } from './popup-client.component';

describe('PopupComponent', () => {
  let component: PopupClientComponent;
  let fixture: ComponentFixture<PopupClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopupClientComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PopupClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
