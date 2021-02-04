import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from 'src/app/models/location';
import { LocationResults } from 'src/app/models/location-results';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  private url: string = 'https://rickandmortyapi.com/api/location';

  constructor( private http: HttpClient ) { }


  getLocations(): Observable<LocationResults>{

      return this.http.get<LocationResults>( this.url );

  }


  getLocation( id: number): Observable<Location>{
    
    if ( id ) {
      return this.http.get<Location>(`${this.url}/${id}`);
    }

  }

}
