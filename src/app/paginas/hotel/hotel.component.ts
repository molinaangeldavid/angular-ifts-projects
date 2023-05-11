import { Component, OnInit } from '@angular/core';
import { Habitacion } from 'src/app/clases/hotel/habitacion.model';
import { Hotel } from 'src/app/clases/hotel/hotel.model';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  registroHotel: any = {
    nombre: undefined,
    lugar: undefined,
    hab1: 0,
    hab2: 0,
    hab3: 0
  }

  hoteles: Hotel[] = new Array<Hotel>();
  selectedHotel;

  constructor() { }

  ngOnInit(): void {

  }

}
