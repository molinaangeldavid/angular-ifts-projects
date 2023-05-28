import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/vehiculo';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.scss']
})
export class VentaComponent{
  
  vehiculos: any[] = [
    {
        codigo: 1,
        imagen: '../../../assets/fiesta.jpeg',
        marca: 'ford',
        modelo: 'fiesta',
        precio: 723000,
        kms: 100000,
        usado: "No",
        vendidos: 0
    },
    {
        codigo: 2,
        imagen: '../../../assets/k.jpeg',
        marca: 'ford',
        modelo: 'K',
        precio: 922000,
        kms: 0,
        usado: "No",
        vendidos: 0
    },
    {
        codigo: 3,
        imagen: '../../../assets/images.jpeg',
        marca: 'Chevrolet',
        modelo: 'Montana',
        precio: 939422,
        kms: 1000,
        usado: "No",
        vendidos: 0
    },
    {
        codigo: 4,
        imagen: '../../../assets/corolla.jpeg',
        marca: 'Toyota',
        modelo: 'Corolla',
        precio: 1039485,
        kms: 0,
        usado: "No",
        vendidos: 0
    },
    {
        codigo: 5,
        imagen: '../../../assets/ford-ranger-1565748.jpg',
        marca: 'Ford',
        modelo: 'Ranger',
        precio: 13942200,
        kms: 45990,
        usado: "si",
        vendidos: 0
    },
    {
        codigo: 6,
        imagen: '../../../assets/lanzamiento-chevrolet-tracker-2021.jpg',
        marca: 'Chevrolet',
        modelo: 'Tracker',
        precio: 139422,
        kms: 1000,
        usado: "si",
        vendidos: 0
    },
    {
        codigo: 7,
        imagen: '../../../assets/yaris.jpg',
        marca: 'Toyota',
        modelo: 'Yaris',
        precio: 1394220,
        kms: 0,
        usado: "no",
        vendidos: 0
    }
]

  vehiculosVendidos: any[] = [];

  cantidadVendidos = 0;
  totalFacturado = 0;
  constructor(){}
  visible: boolean;

  showDialog(vehiculo: Vehiculo): void{
    this.vehiculoMostrar = vehiculo;
    this.visible = true;
  }

  vehiculoMostrar: any | undefined;
  vehiculoElegido: any | undefined;
  
  borrarVehiculo(vehiculo: any){
    this.vehiculos.splice(this.vehiculos.indexOf(vehiculo),1)
    this.vehiculoElegido = this.vehiculos[0]
  }

  scroll(el: HTMLElement){
    el.scrollIntoView({behavior: 'smooth'});
  }

  venderVehiculo(vehiculo: Vehiculo): void{
    this.cantidadVendidos++;
    let auto = this.vehiculos.find(vehi => vehi.codigo === vehiculo.codigo);
    auto.vendidos += 1;
    this.totalFacturado += auto.precio;
    this.vehiculosVendidos.push(vehiculo)
    Swal.fire(
      'Vehiculo vendido!',
      `Se vendio el ${vehiculo.marca}-${vehiculo.modelo}`,
    );
  }

  estadoInput(value: boolean){
    this.visible = value;
  }
}
