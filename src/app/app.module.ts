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

@NgModule(
  {
    declarations: [
      AppComponent,
      Error404Component,
      HomeComponent,
      VentaComponent,
      DetalleComponent,
    ], 
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      AppRoutingModule,
      ButtonModule,
      CardModule,
      MenubarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  }
)
export class AppModule { }
