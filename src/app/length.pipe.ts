import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'length'
})
export class LengthPipe implements PipeTransform {

  transform(value: string): number {
    return value.length;
  }

}
