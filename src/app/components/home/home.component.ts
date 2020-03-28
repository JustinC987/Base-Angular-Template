import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {NotificationService} from '../../services/notifications/notifications.service';
import {Album} from '../../models/album';
import {ExampleHttpService} from '../../services/example-http/example-http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

public success: Boolean;
public albums: Album[];
public album: Album;


  constructor(private http: HttpClient, private notification: NotificationService, private service: ExampleHttpService) { }

  ngOnInit() {
    // this.getAlbums();
  }

  createAlbum() {
    let testAlbum = {
      AlbumName: 'Amnesiac',
      Artist: 'Radiohead'
    }

    this.service.addAlbum(testAlbum).subscribe((res) => {
      console.log(res);
    });

  }

  getAlbums() {
    this.service.getAlbums({}).subscribe((a)=> {
      this.albums = a;

      console.log(a);

    })
  }

  deleteAlbum() {
    this.service.deleteAlbum(2).subscribe((res)=> {});
  }

}
