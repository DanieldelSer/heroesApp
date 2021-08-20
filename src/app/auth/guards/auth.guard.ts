import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanLoad, CanActivate {

  constructor( private authService: AuthService,
               private router: Router ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.authService.verificaAutentificacion()
      .pipe(
        tap( estaAutentificado => {
          if ( !estaAutentificado ) {
            this.router.navigate(['./auth/login']);
          }
        } )
      )

    //   if ( this.authService.auth.id ) {
    //     return true;
    //   }

    //   console.log('canActivate', true);
    //   // console.log( route );
    //   // console.log( segments );

    // return false;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

      return this.authService.verificaAutentificacion()
      .pipe(
        tap( estaAutentificado => {
          if ( !estaAutentificado ) {
            this.router.navigate(['./auth/login']);
          }
        } )
      )

    //   if ( this.authService.auth.id ) {
    //     return true;
    //   }

    //   console.log('canLoad', true);
    //   // console.log( route );
    //   // console.log( segments );

    // return false;
  }
}
