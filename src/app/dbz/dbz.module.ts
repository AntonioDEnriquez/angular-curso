import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';

import { DbzService } from './services/dbz.service';




@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  // Siempre hay que exportar
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  // Los providers son los servicios que se van a especificar aqui, los servicios van a servir como singletons, osea una unica instancia que vamos a tener a lo largo de todo este modulo
  providers: [
    DbzService
  ]
})
export class DbzModule { }
