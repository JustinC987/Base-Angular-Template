import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {NotificationService} from '../notifications/notifications.service';
import {Album} from '../../models/album';

@Injectable({
  providedIn: 'root'
})
export class ExampleHttpService {
  private serverEndpoint = "http://localhost:3000/testAlbum";

  constructor(private notification: NotificationService, private http: HttpClient) { }

  	//Create
	public addAlbum(album: Album): Observable<Object> {
		return this.http.post(this.serverEndpoint, album).pipe(
			tap((result) => {
				if (result) {
					this.notification.showSuccess('Succesfully created Album');
				}
			}),
		);
  }
  
  // Read

  public getAlbums(params: any): Observable<Album[]> {
		return this.http
			.get<Album[]>(this.serverEndpoint, {})
			.pipe(
				map((results) => {
				  // Array-ify
          if (!(results instanceof Array)) {
            results = [ results ];
          }
          if(results) {
            return results;
          }
				}),
			);
  }
  
	// Update

	public update(objectId: number, data: Album): Observable<any> {
		return this.http
			.put(`${this.serverEndpoint}/${objectId}`, data, {})
			.pipe(
				tap((result) => {
					if(result) {
						this.notification.showSuccess('Succesfully Updated Album')
					}
				}),
			);
  }
  
  // Delete
	
	public deleteAlbum(objectId: any): Observable<any> {
		return this.http.request('delete', this.serverEndpoint +  '/' +  objectId).pipe(
			tap((result) => {
				if(result) {
          this.notification.showSuccess('Succesfully deleted Album');
				}
			}),
		);
	}
}
