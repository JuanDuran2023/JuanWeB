import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigovalComponent } from './codigoval.component';

describe('CodigovalComponent', () => {
  let component: CodigovalComponent;
  let fixture: ComponentFixture<CodigovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodigovalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodigovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
