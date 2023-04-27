import { Component, OnInit } from '@angular/core';
import { IGenericToolbarEvents } from 'src/app/Shared/component/generic-toolbar/igeneric-toolbar-events';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.scss']
})
export class HospitalComponent implements OnInit, IGenericToolbarEvents {

  constructor() { }

  Adicionar(): void {
    throw new Error('Method not implemented.');
  }
  Pesquisar(): void {
    alert("Pesquisar");
  }

  ngOnInit(): void {
  }

}
