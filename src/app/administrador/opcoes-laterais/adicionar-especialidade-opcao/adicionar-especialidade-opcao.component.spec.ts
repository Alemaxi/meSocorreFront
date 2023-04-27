import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarEspecialidadeOpcaoComponent } from './adicionar-especialidade-opcao.component';

describe('AdicionarEspecialidadeOpcaoComponent', () => {
  let component: AdicionarEspecialidadeOpcaoComponent;
  let fixture: ComponentFixture<AdicionarEspecialidadeOpcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AdicionarEspecialidadeOpcaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarEspecialidadeOpcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
