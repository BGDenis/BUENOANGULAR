import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() {
  }
  ngOnInit(): void {
    this.menu();
  }
  menu() {
    console.log('Menu Boton');
  }
}
