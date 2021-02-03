import { Component } from '@angular/core';
import { Character } from '../models/character';
import { CharacterService } from '../services/character/character.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  info: Character[] = [];

  constructor( private characterService: CharacterService ) {

    this.characterService.getCharacters()
      .subscribe( (res: any) => {

        this.info = res['results'];

      });

  }

}
