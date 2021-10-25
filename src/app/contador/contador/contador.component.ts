import { Component } from "@angular/core";


@Component({
    selector: 'app-contador',
    template: `
        <h1>{{title}}</h1>

        <!-- Tarea -->
        <h3>La base es: <span>{{base}}</span></h3>

        <!-- Cuando hay algo entre parentesis significa que es un evento -->
        <button (click)="acumular(base)"> + {{base}} </button>

        <span>{{numero}}</span>

        <button (click)="acumular( -base )"> - {{base}} </button>
    `
})
export class ContadorComponent {
    title = 'Contador App';

    // Se especifica el tipo para fines de buenas practicas y que otras personas infieran el tipado
    numero: number = 0;

    // crear propiedad base = 5;

    base: number = 5;

    acumular(valor: number) {
        this.numero += valor;
    }

}