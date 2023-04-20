import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrovozComponent } from './registrovoz.component';

describe('RegistrovozComponent', () => {
  let component: RegistrovozComponent;
  let fixture: ComponentFixture<RegistrovozComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrovozComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrovozComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
