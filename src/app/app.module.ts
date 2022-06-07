import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AutoModule } from './auto/auto.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AutoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
