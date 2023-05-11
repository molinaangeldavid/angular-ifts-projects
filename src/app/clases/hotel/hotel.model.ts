import { Habitacion } from "./habitacion.model";

export class Hotel {
    nombre: string | undefined;
    lugar: string | undefined;
    capacidad: number | undefined;
    habitaciones: Habitacion[] | undefined;
    facturacion: number = 0;
    constructor(nombre: string, lugar: string, totHab1: number, totHab2: number, totHab3: number) {
        //REALIZAR UN CONSTRUCTOR DE HOTEL QUE RECIBA EL NOMBRE Y EL LUGAR DE ORIGEN
        //Y LA CANTIDAD DE HABITACIONES POR TIPO QUE TIENE, CARGAR EL HOTEL CON LAS HABITACIONES PERTINENTES
        
    }


}