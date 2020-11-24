import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  nombre = 'DPEX';
  direccion = 'Av.Peru 1273';
  telefono = '976008811';
  email = 'proyectdepex@gmail.com';
  descripcion = 'Conferencias virtuales a cargo de ponentes nacionales, expertos en dirección de proyectos, para capacitar y asesorar sobre la importancia de la planificación y metodologías que se deben implementar para tener éxito en un proyecto.';

  descripcionActiva: boolean;

  constructor() {
    this.descripcionActiva = false;
  }
  ngOnInit(): void {
    this.verdescripcion();
  }

  verdescripcion() {
    console.log('VALOR = ' + this.descripcionActiva);
    this.descripcionActiva = !this.descripcionActiva;
  }

}
