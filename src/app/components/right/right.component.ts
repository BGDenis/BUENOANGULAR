import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  paisActivo: boolean;
  peruActivo: boolean;

  constructor() {
    this.paisActivo = true;
    this.peruActivo = false;
  }

  ngOnInit(): void {
    this.verperu();
    this.verpais();
  }
  verperu() {
    this.peruActivo = true;
    this.paisActivo = false;
  }
  verpais() {
    this.peruActivo = false;
    this.paisActivo = true;
  }

}
