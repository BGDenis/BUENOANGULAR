import { Component, OnInit ,Input} from '@angular/core';
import { PaisesService } from "../../servicios/paises.service";

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {
  title = 'Paises Components'
  listaPaises: any = [];
  @Input() ver: boolean = false;
  constructor(private servPais: PaisesService) {
  }

  ngOnInit(): void {
    this.getListPaises();
  }

  getListPaises() {
    this.servPais.getAllPaises().subscribe((pais: {}) => { this.listaPaises = pais/*console.log(pais)*/ });
  }

}
