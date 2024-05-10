// can-activate-page.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({providedIn: 'root'})

export class CanActivatePageGuard implements CanActivate 
{
  constructor(private router: Router) {}

  canActivate(): boolean 
  {
    console.log("Переход на страницу!")
    const allowNavigation = true;
    if (!allowNavigation) {
      this.router.navigate(['/']);
    }
    return allowNavigation;
  }
}
