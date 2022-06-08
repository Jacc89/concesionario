import { Component, Input, OnInit } from '@angular/core';
import { IAuto } from '../interfaces/auto';
import { AutoService } from '../service/auto.service';

@Component({
  selector: 'app-lista-auto',
  templateUrl: './lista-auto.component.html',
  styleUrls: ['./lista-auto.component.css']
})
export class ListaAutoComponent implements OnInit {

  // @Input() autos : IAuto[] = [];
  
  constructor(private autoService: AutoService) { }

  ngOnInit(): void {
  }

  get autos(): IAuto[]{
    return this.autoService.autos;
  }

}
