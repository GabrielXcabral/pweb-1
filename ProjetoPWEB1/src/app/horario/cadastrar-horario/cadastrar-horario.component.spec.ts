import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarHorarioComponent } from './cadastrar-horario.component';

describe('CadastrarHorarioComponent', () => {
  let component: CadastrarHorarioComponent;
  let fixture: ComponentFixture<CadastrarHorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarHorarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
