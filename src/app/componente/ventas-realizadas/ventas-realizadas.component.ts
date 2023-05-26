import { Component, Input, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/vehiculo';


@Component({
  selector: 'app-ventas-realizadas',
  templateUrl: './ventas-realizadas.component.html',
  styleUrls: ['./ventas-realizadas.component.scss']
})
export class VentasRealizadasComponent implements OnInit{
  
  
  vehiculosVendidosLista: Vehiculo[] = [];
  ngOnInit(): void {
    
  }

  @Input() vehiculoVendido: Vehiculo;
  vehiculo: any;

  



}



