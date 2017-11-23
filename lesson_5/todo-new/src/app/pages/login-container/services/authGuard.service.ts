import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

// import { IUserData } from '../../../interfaces/IUserData.interface';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let user = localStorage.getItem('login');
    if (user) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
