import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit {
  @Input() nombre:string = "Romina";
  constructor() { }
//Instrucion previa a la renderizacion del componente
  ngOnInit(): void {
    console.log("ngOnInit del componente Saludo");
  }
  //Ejemlo de gestionar una aleta tipo click en el DOM
  alertaSaludo(): void{
    alert(`Hola, ${this.nombre}. Alerta despachada desde un click en el botón`);
  }

}
