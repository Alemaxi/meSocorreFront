import { Component, OnInit } from '@angular/core';
import { IGenericToolbarEvents } from 'src/app/Shared/component/generic-toolbar/igeneric-toolbar-events';

@Component({
  selector: 'app-especialidade',
  templateUrl: './especialidade.component.html',
  styleUrls: ['./especialidade.component.scss']
})
export class EspecialidadeComponent implements OnInit, IGenericToolbarEvents {

  constructor() { }
  
  Adicionar(): void {
    alert("Implemenado")
  }
  
  Pesquisar(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
