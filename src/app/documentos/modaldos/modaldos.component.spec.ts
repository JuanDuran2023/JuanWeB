import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldosComponent } from './modaldos.component';

describe('ModaldosComponent', () => {
  let component: ModaldosComponent;
  let fixture: ComponentFixture<ModaldosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaldosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaldosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
