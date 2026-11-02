import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (sessionStorage.getItem("TOKEN")) {
      // Si tiene token, le dejamos pasar
      return true;
    } else {
      // Si el usuario no está autorizado, lo llevamos al login.
      // Tenemos que enviar también el estado de la url para que no se pierdan los parámetros
      return this._router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } })
    }
  }
}
