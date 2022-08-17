import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products:any[] , word:string): any {
    return products.filter(pro=>pro.name.toLowerCase().includes(word.toLowerCase()));
  }

}
