import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByObjectProperty'
})
export class OrderByObjectPropertyPipe implements PipeTransform {
  private direction: number;

  transform(records: Array<any>, property: string, ascending=true): any {
    let direction = ascending ? 1: -1;

    return records.sort(function(a, b){
      if(a[property] < b[property]){
        return -1 * direction;
      }
      else if( a[property] > b[property]){
        return 1 * direction;
      }
      else{
        return 0;
      }
    });
  };
}
