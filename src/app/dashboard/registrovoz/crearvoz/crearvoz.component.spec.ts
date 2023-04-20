import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearvozComponent } from './crearvoz.component';

describe('CrearvozComponent', () => {
  let component: CrearvozComponent;
  let fixture: ComponentFixture<CrearvozComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearvozComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearvozComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
