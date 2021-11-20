import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidateTokenGuard implements CanActivate, CanLoad {
  
  constructor ( private authService:AuthService,
                private router:Router){}
  
  canActivate(): boolean {
    if(!this.authService.isAuthenticated())
      this.router.navigateByUrl('/login')
    return this.authService.isAuthenticated();
  }

  canLoad(): boolean {
    if(!this.authService.isAuthenticated())
      this.router.navigateByUrl('/login')
    return this.authService.isAuthenticated();
  }
}
