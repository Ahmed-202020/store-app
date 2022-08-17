import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(price:string | number):string | number {
    return `price: ${price} EG`
  }

}
