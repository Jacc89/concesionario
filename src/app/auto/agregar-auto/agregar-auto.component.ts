import { Component, OnInit } from '@angular/core';
import { IAuto } from '../interfaces/auto';
import { AutoService } from '../service/auto.service';

@Component({
  selector: 'app-agregar-auto',
  templateUrl: './agregar-auto.component.html',
  styleUrls: ['./agregar-auto.component.css']
})
export class AgregarAutoComponent implements OnInit {

  constructor(private autoService: AutoService) { }

  ngOnInit(): void {
  }
  nuevo: IAuto ={
    marca: '',
    modelo:'',
    precio: 0,
  }
  Agregar(){
    console.log(this.nuevo);
    if (this.nuevo.marca.trim().length ===0) {
      return;      
    }
    if (this.nuevo.modelo.trim().length ===0) {
      return
    }
    if (this.nuevo.precio === null) {
      return;
    }
    // this.autos.push(this.nuevo);
    this.autoService.agregarAuto(this.nuevo);
    this.nuevo = {
      marca: '',
      modelo:'',
      precio: 0,
    }

}
}
