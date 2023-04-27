import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-opcao-esquerda',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './opcao-esquerda.component.html',
  styleUrls: ['./opcao-esquerda.component.scss']
})
export class OpcaoEsquerdaComponent {

  @Input() titulo: string = "Titulo"

  @Input() mostrarOpcao:boolean = false;
  @Output() MostrarOpcaoChange = new EventEmitter();
  
  BackClicked(){
    this.mostrarOpcao = false;
  }
}
