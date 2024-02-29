import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Registro de usuarios';
  mensaje="";
  registrado=false;
  nombre:string="";
  apellido:string="";
  entradas: Array<{titulo:string}>;
i: any;


constructor(){
  this.entradas=[

    {titulo:"Python cada dia mas presente"},
    {titulo:"jajva lleva 20 años"},
    {titulo:"js es mas funcional"},
    {titulo:"flutter mola"},
    {titulo:"kotlin no tanto"},
  ]
}




  registrarUsuario(){
   
    this.registrado=true;
    this.mensaje="Usuario registrado con éxito"
  }
}
