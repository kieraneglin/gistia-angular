import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyprint'
})
export class PrettyPrintPipe implements PipeTransform {
  transform(val) {
    if(val !== ''){
      return JSON.stringify(val, null, 4)
        .replace(' ', '&nbsp;')
        .replace('\n', '<br/>');
    }
  }
}
