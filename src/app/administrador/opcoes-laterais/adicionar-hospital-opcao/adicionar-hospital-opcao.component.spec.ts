import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarHospitalOpcaoComponent } from './adicionar-hospital-opcao.component';

describe('AdicionarHospitalOpcaoComponent', () => {
  let component: AdicionarHospitalOpcaoComponent;
  let fixture: ComponentFixture<AdicionarHospitalOpcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AdicionarHospitalOpcaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarHospitalOpcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
