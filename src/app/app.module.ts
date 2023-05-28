import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Error404Component } from './paginas/error404/error404.component';

import { MenubarModule } from 'primeng/menubar';
import { HomeComponent } from './paginas/home/home.component';
import { VentaComponent } from './paginas/venta/venta.component';
import { DetalleComponent } from './componente/detalle/detalle.component';
import { HotelComponent } from './paginas/hotel/hotel.component';
import { PrimengModule } from './modules/primeng/primeng.module';
import { NavComponent } from './componente/nav/nav.component';
import { VentasRealizadasComponent } from './componente/ventas-realizadas/ventas-realizadas.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { ModeloMasVendidoPipe } from './pipes/modelo-mas-vendido.pipe';

@NgModule(
  {
    declarations: [
      AppComponent,
      Error404Component,
      HomeComponent,
      VentaComponent,
      DetalleComponent,
      HotelComponent,
      NavComponent,
      VentasRealizadasComponent,
      ModeloMasVendidoPipe
    ], 
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      AppRoutingModule,
      ButtonModule,
      CardModule,
      MenubarModule,
      PrimengModule,
      DynamicDialogModule,
      DialogModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  }
)
export class AppModule { }
