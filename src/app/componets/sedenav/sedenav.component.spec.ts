import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedenavComponent } from './sedenav.component';

describe('SedenavComponent', () => {
  let component: SedenavComponent;
  let fixture: ComponentFixture<SedenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SedenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SedenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
