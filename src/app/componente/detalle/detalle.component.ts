import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent {

  @Input() vehiculo: any | undefined;
  @Output() cerrar = new EventEmitter<boolean>();

  cerrarDialog(){
    this.cerrar.emit(false)
  }
}
