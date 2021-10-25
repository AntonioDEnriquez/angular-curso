import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    // Declaraciones dicen que cosas contiene este modulo
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    // Que cosas quiero que sean visibles afuera de este modulo
    exports: [
        ListadoComponent
    ],
    // Van modulos
    imports: [
        // Ofrece directicas como el ngIf y el ngFor entre otras cosas
        CommonModule
    ]
})
export class HeroesModule { }