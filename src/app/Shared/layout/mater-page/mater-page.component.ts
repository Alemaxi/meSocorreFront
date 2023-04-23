import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mater-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mater-page.component.html',
  styleUrls: ['./mater-page.component.scss']
})
export class MaterPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
