import { Component, OnInit } from '@angular/core';
import { IAuto } from '../interfaces/auto';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {
  ngOnInit(): void {
  }

  nuevo: IAuto ={
    marca: '',
    modelo:'',
    precio: 0,
  }

  autos: IAuto[] = [       
  {  
      modelo:'Explorer',
      marca:'Ford',
      precio: 35000000
  },
  {   
      modelo:'323',
      marca:'Chevrolet',
      precio: 30000000
  },
  {  
      modelo:'Spark',
      marca:'Chevrolet',
      precio: 2500000
  },
  {  
      modelo:'Twingo',
      marca:'Renault',
      precio: 20000000
  },
  {  
      modelo:'GOL',
      marca:'Volkswagen',
      precio: 45000000
  }

  ]
  
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
    this.autos.push(this.nuevo);
    this.nuevo = {
      marca: '',
      modelo:'',
      precio: 0,
    }
  }

}
