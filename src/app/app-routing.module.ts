import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { Error404Component } from './paginas/error404/error404.component';
import { VentaComponent } from './paginas/venta/venta.component';
import { HotelComponent } from './paginas/hotel/hotel.component';
// import { DetalleComponent } from './componente/detalle/detalle.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'ventas',
    component: VentaComponent
  },
  {
    path: 'hotel',
    component: HotelComponent
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
