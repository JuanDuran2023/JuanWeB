import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RePerfilComponent } from './re-perfil.component';

describe('RePerfilComponent', () => {
  let component: RePerfilComponent;
  let fixture: ComponentFixture<RePerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RePerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RePerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
