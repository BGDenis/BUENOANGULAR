import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  title = 'Footer';
  persona = new persona();
  institucion = new institusion();
  anio = this.getanio();


  constructor() { }

  ngOnInit(): void {
  }
  getanio(){
    let fec  = new Date();
    return fec.getFullYear();
  }
}
class persona {
  nombre = 'Denis';
  Apellidos ='Bueno Gutierrez';
  Direccion ='Av. Maco Capac A62';
  tef='983159968';
  constructor() {
  }
  getNombre(){
    return this.nombre;
  }
}
class institusion{
  nombre = "Universidad Nacional de Cajamarca";
  facultad = "Ingenieria";
  escuela = "Ingenieria de Sistemas";
}
