import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:"root"
})
export class CustomerGuard implements CanActivate{
  constructor(private authService:AuthService){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    return true;
  }

}
