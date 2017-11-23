import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class ExitNosaveGuardService implements CanDeactivate<boolean> {

  constructor() { }

  canDeactivate(
    component: any,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean {
    const result: boolean = window.confirm('You are saved changes? If you not saved, all the changes don\'t apply!');
    return result;
  }


}
