import { Component } from '@angular/core';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.scss']
})
export class VentaComponent {
  
  vehiculos: any[] = [
    {
        codigo: 1,
        imagen: '../../../assets/fiesta.jpeg',
        marca: 'ford',
        modelo: 'fiesta',
        precio: 12000,
        kms: 100000,
        usado: "si"
    },
    {
        codigo: 2,
        imagen: '../../../assets/k.jpeg',
        marca: 'ford',
        modelo: 'K',
        precio: 9000,
        kms: 0,
        usado: "no"
    },
    {
        codigo: 3,
        imagen: '../../../assets/images.jpeg',
        marca: 'Chevrolet',
        modelo: 'Montana',
        precio: 139422,
        kms: 1000,
        usado: "si"
    }
]
  vehiculoElegido: any;

  mostrarDetalle(vehiculo: any): void{
    this.vehiculoElegido = vehiculo;
  }

  borrarVehiculo(vehiculo: any){
    this.vehiculos.splice(this.vehiculos.indexOf(vehiculo),1)
  }

}
