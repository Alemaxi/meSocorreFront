import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material';

@Component({
  selector: 'app-master-page-layout',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
  ],
  templateUrl: './master-page-layout.component.html',
  styleUrls: ['./master-page-layout.component.scss']
})
export class MasterPageLayoutComponent {

  @Input() mostrarAdicionar: boolean = true;
  @Output() AdicionarClicado = new EventEmitter();

  @Input() mostrarPesquisar: boolean = true;
  @Output() PesquisarClicado = new EventEmitter();
}
