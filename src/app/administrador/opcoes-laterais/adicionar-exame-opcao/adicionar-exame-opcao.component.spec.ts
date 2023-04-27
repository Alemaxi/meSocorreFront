import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarExameOpcaoComponent } from './adicionar-exame-opcao.component';

describe('AdicionarExameOpcaoComponent', () => {
  let component: AdicionarExameOpcaoComponent;
  let fixture: ComponentFixture<AdicionarExameOpcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AdicionarExameOpcaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarExameOpcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
