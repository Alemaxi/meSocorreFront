import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material';

@Component({
  selector: 'app-generic-toolbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
  ],
  templateUrl: './generic-toolbar.component.html',
  styleUrls: ['./generic-toolbar.component.scss']
})
export class GenericToolbarComponent {

  @Input() mostrarAdicionar: boolean = true;
  @Output() AdicionarClick = new EventEmitter();

  @Input() mostrarPesquisar: boolean = true;
  @Output() PesquisarClick = new EventEmitter();

  constructor() {

  }

  AdicionarClicado(){
    this.AdicionarClick.emit();
  }

  PesquisarClicado() {
    this.PesquisarClick.emit();
  }

}
