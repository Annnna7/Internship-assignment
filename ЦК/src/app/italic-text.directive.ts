import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appItalicText]'
})

export class ItalicTextDirective 
{

  constructor(private el: ElementRef) {}

  @HostBinding('style.font-style')
  get getFontStyle() 
  {
    return 'italic';
  }
}