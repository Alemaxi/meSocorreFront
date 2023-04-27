import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcaoEsquerdaComponent } from './opcao-esquerda.component';

describe('OpcaoEsquerdaComponent', () => {
  let component: OpcaoEsquerdaComponent;
  let fixture: ComponentFixture<OpcaoEsquerdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ OpcaoEsquerdaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpcaoEsquerdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
