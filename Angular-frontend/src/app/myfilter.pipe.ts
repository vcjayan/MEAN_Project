import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    if(!args) {
      return value
    }
    else {
      args=args.toUpperCase()
    }

    return value.filter(items=>{
      return items.RFID.startsWith(args)==true         
    })
  }

}
