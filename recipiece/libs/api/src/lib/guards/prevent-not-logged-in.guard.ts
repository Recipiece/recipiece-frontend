import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { SessionService } from '../api';

@Injectable()
export class PreventNotLoggedInGuard implements CanActivate {
  constructor(private sessionService: SessionService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Promise<boolean> {
    if (!this.sessionService.hasSession) {
      return this.router.navigate(['landing']);
    } else {
      return true;
    }
  }
}
