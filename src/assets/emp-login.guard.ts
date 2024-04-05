import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user-service/user.service';

@Injectable({
  providedIn: 'root'
})
export class EmpLoginGuard implements CanActivate {

  constructor(private _userService:UserService, private _router:Router) {
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(localStorage.getItem('user')){
        return true;
      } else {
        this._router.navigate(['/login']);
        return this._userService.invalidUserAuth;
        // return false;
      }

  }
  
}
