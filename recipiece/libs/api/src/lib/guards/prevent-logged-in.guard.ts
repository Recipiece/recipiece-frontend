import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { SessionService } from '../api';

@Injectable()
export class PreventLoggedInGuard implements CanActivate {
  constructor(private router: Router, private sessionService: SessionService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Promise<boolean> {
    if (this.sessionService.hasSession) {
      return this.router.navigate(['dashboard']);
    } else {
      return true;
    }
  }
}
