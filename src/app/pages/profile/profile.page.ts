import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/character';
import { CharacterService } from 'src/app/services/character/character.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profileId: number;
  character: Character;

  constructor(private activatedRoute: ActivatedRoute,
              private characterService: CharacterService
            ) { }

  ngOnInit() {

    this.profileId = parseInt( this.activatedRoute.snapshot.paramMap.get('id')),

    this.characterService.getCharacter(this.profileId)

      .subscribe( (res: Character)=>{

        this.character = res;

      }

      );

  }

}
