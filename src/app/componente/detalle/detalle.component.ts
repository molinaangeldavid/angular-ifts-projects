import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent {

  @Input() vehiculo: any;
  router: Router;

  venderauto(): void{
    this.router.navigate(['detalles'])
  }

  visible: boolean;

  showDialog() {
    this.visible = true;
  }

}
