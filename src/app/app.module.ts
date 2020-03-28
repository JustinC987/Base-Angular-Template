import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import {SidenavService} from './services/sidenav/sidenav.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule } from "@angular/material";
import { LayoutComponent } from './components/layout/layout.component';
import { NavlinksComponent } from './components/navlinks/navlinks.component';
import { LoaderComponent } from './components/loader/loader/loader.component';
import {LoaderService} from './services/loader/loader.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {LoaderInterceptor} from './interceptors/loader/loader.interceptor';
import { HttpClientModule } from '@angular/common/http';
import {ErrorHandlerInterceptor} from './interceptors/error-handler/error-handler.interceptor';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {ErrorService} from './services/error/error.service';
import {LoggingService} from './services/logging/logging.service';
import {NotificationService} from './services/notifications/notifications.service';
import {GlobalErrorHandler} from './ErrorHandler/global-error-handler';
import {HeadersInterceptor} from './interceptors/header/headers.interceptor';
import { ExampleHttpService } from './services/example-http/example-http.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LayoutComponent,
    NavlinksComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatSnackBarModule

  ],
  providers: [
    SidenavService, 
    LoaderService,
    ErrorService,
    LoggingService,
    ExampleHttpService,
    NotificationService, 
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }, 
    {provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true} ,
    { provide: ErrorHandler, useClass: GlobalErrorHandler},
 
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
