import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';


export class AuthGuard implements CanActivate{
    CanActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        throw new Error("Method not implemented.");
    }

}