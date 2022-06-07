import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoComponent } from './auto/auto.component';
import { ListaAutoComponent } from './lista-auto/lista-auto.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AutoComponent,
    ListaAutoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    AutoComponent,
    ListaAutoComponent,
  ]
})
export class AutoModule { }
