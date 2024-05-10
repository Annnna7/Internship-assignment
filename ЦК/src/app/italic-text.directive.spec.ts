import { ItalicTextDirective } from './italic-text.directive';
import { ElementRef } from '@angular/core';

describe('ItalicTextDirective', () => {
  it('should create an instance', () => {
    const elMock: ElementRef = { nativeElement: {} } as any;
    const directive = new ItalicTextDirective(elMock);
    expect(directive).toBeTruthy();
  });
});
