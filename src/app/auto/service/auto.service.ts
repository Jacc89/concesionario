import { Injectable } from '@angular/core';
import { IAuto } from '../interfaces/auto';

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  constructor() {

    console.log('service iniciado autos');
    this._autos = JSON.parse(localStorage.getItem('autos')!) || [];
   }

  private _autos: IAuto[] = [       
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

    get autos(): IAuto[]{
      return this._autos;
    }

    agregarAuto(auto: IAuto){
      this._autos.push(auto);
      localStorage.setItem('autos', JSON.stringify(this._autos));
    }
  
  
  }
