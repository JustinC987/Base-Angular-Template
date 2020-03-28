import { Component, ViewChild, OnInit } from '@angular/core';
import { SidenavService } from './services/sidenav/sidenav.service';
import { HeaderComponent } from './components/header/header.component';
import { MatSidenav } from '@angular/material';
import {LoaderService} from './services/loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-template';

  constructor(public loaderService: LoaderService) {

  }

}
