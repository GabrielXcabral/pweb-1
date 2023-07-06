import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarHarariosComponent } from './listar-hararios.component';

describe('ListarHarariosComponent', () => {
  let component: ListarHarariosComponent;
  let fixture: ComponentFixture<ListarHarariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarHarariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarHarariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
