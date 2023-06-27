import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StarWarsService } from './services/star-wars.service';
import { BudgetService } from './services/budget.service';
import { AuthService } from './services/auth.service';
import { JWTInterceptor } from './services/jwtinterceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    HttpClientModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    StarWarsService, BudgetService, AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true }

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
