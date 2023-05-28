import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modeloMasVendido'
})
export class ModeloMasVendidoPipe implements PipeTransform {
  
  transform(objArr: any[], ...args: unknown[]): unknown {
    if(objArr.length > 0){
      let auto = objArr.reduce((max, current) => {
        if (current.vendidos > max.vendidos) {
          return current.modelo;
        }
        return max.modelo;
      });
      return auto.modelo
    }else{
      return ""
    }
  }
  
}
