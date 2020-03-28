import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SidenavService } from 'src/app/services/sidenav/sidenav.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
	@ViewChild('sidenav', {static: false}) public sidenav: MatSidenav;

	constructor(private sidenavService: SidenavService) {	}

	ngOnInit(): void {}

	ngAfterViewInit(): void {
		this.sidenavService.setSidenav(this.sidenav);
	}

	closeSidenav() {
		this.sidenav.close();
	}
}
