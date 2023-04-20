import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvocadoComponent } from './convocado.component';

describe('ConvocadoComponent', () => {
  let component: ConvocadoComponent;
  let fixture: ComponentFixture<ConvocadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvocadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvocadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
