import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Vehiculo } from 'src/app/vehiculo';


@Component({
  selector: 'app-ventas-realizadas',
  templateUrl: './ventas-realizadas.component.html',
  styleUrls: ['./ventas-realizadas.component.scss']
})
export class VentasRealizadasComponent implements OnInit{
  
  @Input() vehiculosVendidosLista: any[]; 
  @Input() cantidad: any
  @Input() presupuesto: any;

  ngOnInit(): void {
  }

  total: any;
  
  totalFacturado(): any{
    let total = 0;
    for (let index = 0; index < this.vehiculosVendidosLista.length; index++) {
      const element = this.vehiculosVendidosLista[index];
      total += element.precio;
    }
    return total
  }



}



