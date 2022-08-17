import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'somePro'
})
export class SomeProPipe implements PipeTransform {

  transform(products:any[] , pro:number):any {
    return products.slice(0 , pro);
  }

}
