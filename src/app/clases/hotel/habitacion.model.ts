export class Habitacion {
    numero: number | undefined;
    tipo: number | undefined;
    estilo: string | undefined;
    ocupada: boolean | undefined;
    precio: number | undefined;

    constructor(numero: number, tipo: number) {
        //REALIZAR LOGICA PARA QUE DEPENDIENDO EL TIPO (1/2/3) CARGUE EL PRECIO Y EL ESTILO
        //TIPO 1 => ESTILO = SIMPLE // PRECIO => 1500
        //TIPO 2 => ESTILO = DOBLE // PRECIO => 2800
        //TIPO 1 => ESTILO = TRIPLE // PRECIO => 4000
        
    }
}