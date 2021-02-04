import { Component, OnInit } from '@angular/core';
import { Episode } from 'src/app/models/episode';
import { EpisodeResults } from 'src/app/models/episode-results';
import { EpisodesService } from 'src/app/services/episodes/episodes.service';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.page.html',
  styleUrls: ['./episode-list.page.scss'],
})
export class EpisodeListPage implements OnInit {

  episodes: Episode[] = [];

  constructor( private episodesService: EpisodesService ) { }

  ngOnInit() {

    this.episodesService.getEpisodes()
      .subscribe( (res: EpisodeResults) => {

        this.episodes = res['results'];

      },

      err=>{      
        
        console.log(err);
      
      });
    
  }

}
