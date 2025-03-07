import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, CanLoad, GuardResult, MaybeAsync, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn:"root"
})
export class CustomerGuard implements CanActivate,CanLoad{
  constructor(private Authservice:AuthService, private router:Router){

  }
  canLoad(route: Route, segments: UrlSegment[]): boolean {

    if(!this.Authservice.isLogged){
      alert("You Need To Login First !!")
      this.router.navigate(["user/login"])
      return false
    }else{
      return true;
    }
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(!this.Authservice.isLogged){
      alert("You Need To Login First !!")
      this.router.navigate(["user/login"])
      return false
    }else{
      return true;
    }
    
  }

  
}
