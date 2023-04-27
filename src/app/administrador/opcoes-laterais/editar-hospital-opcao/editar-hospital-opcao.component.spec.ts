import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarHospitalOpcaoComponent } from './editar-hospital-opcao.component';

describe('EditarHospitalOpcaoComponent', () => {
  let component: EditarHospitalOpcaoComponent;
  let fixture: ComponentFixture<EditarHospitalOpcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ EditarHospitalOpcaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarHospitalOpcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
