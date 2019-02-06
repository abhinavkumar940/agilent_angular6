import { Injectable } from "@angular/core";
import {
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../_services/auth.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    let nextUrl = next.url.length && next.url[0].path;

    if (nextUrl && nextUrl === "login") {
      return !this.authService.isLoggedIn();
    }

    return this.authService.isLoggedIn();
  }

  canActivateChild() {
    return true;
  }
}
