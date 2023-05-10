import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  nombre: string = "";
  edad: number = 0;
  texto: string = '';
  items: MenuItem[];

  titulos: string[] = ["Club", "Hinchas", "País", "Acción"];

  constructor() { }

  ngOnInit(): void {
  
  }
}

