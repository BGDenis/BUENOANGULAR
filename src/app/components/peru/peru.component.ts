import { Component, OnInit } from '@angular/core';
import { PaisesService } from "../../servicios/paises.service";

@Component({
  selector: 'app-peru',
  templateUrl: './peru.component.html',
  styleUrls: ['./peru.component.css']
})
export class PeruComponent implements OnInit {
  title='Peru Component';
  pais: any =[];
  constructor(private mypais: PaisesService) { 
  }

  ngOnInit(): void {
    this.getPais();
  }
  getPais() {
    return this.mypais.getPais().subscribe((data:{}) => { this.pais = data })
  }
}
