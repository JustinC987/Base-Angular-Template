import {Component, ViewChild, OnInit} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {SidenavService} from '../../services/sidenav/sidenav.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private sidenav: SidenavService) { }

  ngOnInit() {
  }

  toggleRightSidenav() {
    this.sidenav.toggle();
 }
 
}
