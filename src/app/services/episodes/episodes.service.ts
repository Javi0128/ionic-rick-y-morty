import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Episode } from 'src/app/models/episode';
import { EpisodeResults } from 'src/app/models/episode-results';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  private url: string = 'https://rickandmortyapi.com/api/episode';

  constructor( private http: HttpClient ) { }


  getEpisodes(): Observable<EpisodeResults>{

    return this.http.get<EpisodeResults>( this.url );

  }
  

  getEpisode( id: number ): Observable<Episode>{

    if ( id ) {
      
      return this.http.get<Episode>( `${this.url}/${id}`);

    }
    
  }

}
