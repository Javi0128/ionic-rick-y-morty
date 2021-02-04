import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { CharacterResults } from 'src/app/models/character-results';
import { CharacterService } from 'src/app/services/character/character.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {

  characters: Character[] = [];

  constructor( private characterService: CharacterService ) { }

  ngOnInit() {

    this.characterService.getCharacters()
      .subscribe( (res: CharacterResults) => {

        this.characters = res['results'];

      },
      
      err=>{

        console.log(err);

      });

  }

}
