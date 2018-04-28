import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authentication: AuthenticationService, private router: Router) {}

    canActivate() {
        if(this.authentication.loggedIn()) {
            return true;
        } else {
            this.router.navigate(['login']);

            return false;
        }
    }
}
