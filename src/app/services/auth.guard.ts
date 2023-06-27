import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router,
    private toastCtrl: ToastController) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.auth.isAuthenticated()) {
      return true;
    } else {
      this.redirectToLogin();
      return false;
    }
  }

  async redirectToLogin() {
    const delay = 1000;
    const toast = await this.toastCtrl.create({
      message: 'Impossible de naviguer vers cet écran',
      duration: delay
    });
    await toast.present();
    this.router.navigateByUrl('/login');
  }

}
