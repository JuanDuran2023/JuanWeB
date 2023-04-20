import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrotxtComponent } from './registrotxt.component';

describe('RegistrotxtComponent', () => {
  let component: RegistrotxtComponent;
  let fixture: ComponentFixture<RegistrotxtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrotxtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrotxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
