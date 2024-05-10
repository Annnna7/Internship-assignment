// can-deactivate-page.guard.ts
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

export interface CanComponentDeactivate 
{
  canDeactivate: () => boolean;
}

@Injectable({providedIn: 'root'})

export class CanDeactivatePageGuard implements CanDeactivate<CanComponentDeactivate> 
{
  canDeactivate(component: CanComponentDeactivate): boolean 
  {
    console.log("Покидание страницы!")
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
