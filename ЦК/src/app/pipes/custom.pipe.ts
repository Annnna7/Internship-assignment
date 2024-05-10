import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addSuffix'
})

export class AddSuffixPipe implements PipeTransform 
{
  transform(value: string, suffix: string): string 
  {
    return value + suffix;
  }
}
