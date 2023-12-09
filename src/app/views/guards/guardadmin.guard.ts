import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthadminService } from '../services/authadmin.service';

@Injectable({
  providedIn: 'root',
})
export class GuardadminGuard implements CanActivate {
  constructor(private authAdmin: AuthadminService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return new Promise((resolve, reject) => {
      if (this.authAdmin.loggedIn() == true) {
        resolve(true);
      } else {
        resolve(false);
        this.router.navigate(['/admin/login'],{queryParams:{returnUrl:state.url}})
        localStorage.removeItem('token')
      }
    });
  }
}
