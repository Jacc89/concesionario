import { Component, Input, OnInit } from '@angular/core';
import { IAuto } from '../interfaces/auto';

@Component({
  selector: 'app-lista-auto',
  templateUrl: './lista-auto.component.html',
  styleUrls: ['./lista-auto.component.css']
})
export class ListaAutoComponent implements OnInit {

  @Input() autos : IAuto[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
