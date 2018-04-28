import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { Routing } from './app.routing';
import { AuthGuard } from './_guard/index';

import { HomepageComponent } from './homepage/homepage.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthenticationService } from './authentication/authentication.service';
import { ProductComponent } from './product/product.component';
import { ProductRepositoryService } from './product/product-repository.service';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({
    tokenName: 'id_token',
    tokenGetter: (() => localStorage.getItem('id_token')),
  }), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    HomepageComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    Routing
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ]
    },
    AuthGuard,
    AuthenticationService,
    ProductRepositoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
