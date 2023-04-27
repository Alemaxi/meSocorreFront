import { Component, OnInit } from '@angular/core';
import { IGenericToolbarEvents } from 'src/app/Shared/component/generic-toolbar/igeneric-toolbar-events';

@Component({
  selector: 'app-exame',
  templateUrl: './exame.component.html',
  styleUrls: ['./exame.component.scss']
})
export class ExameComponent implements OnInit, IGenericToolbarEvents {

  constructor() { }
  Adicionar(): void {
    throw new Error('Method not implemented.');
  }
  Pesquisar(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
