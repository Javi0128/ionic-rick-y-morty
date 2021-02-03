import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from 'src/app/models/character';
import { CharacterResults } from 'src/app/models/character-results';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private url: string = 'https://rickandmortyapi.com/api/character';
  
  constructor( private http: HttpClient ) { }

    //get all characters

    getCharacters(): Observable<CharacterResults>{

      // makes an api call to get all characters
      return this.http.get<CharacterResults>( this.url );

    }


    getCharacter( id: number ): Observable<Character>{

      // get a single character
      if ( id ){

        return this.http.get<Character>( `${this.url}/${id}`)

      }

    }

  }
