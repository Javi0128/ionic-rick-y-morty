import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Episode } from 'src/app/models/episode';
import { EpisodesService } from 'src/app/services/episodes/episodes.service';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.page.html',
  styleUrls: ['./episode-details.page.scss'],
})
export class EpisodeDetailsPage implements OnInit {

  episodeId: number;
  episode: Episode;

  constructor(  private activatedRoute: ActivatedRoute,
                private episodeService: EpisodesService
              ) { }

  ngOnInit() {

    this.episodeId = parseInt( this.activatedRoute.snapshot.paramMap.get('id'));

    this.episodeService.getEpisode(this.episodeId)

      .subscribe( (res: Episode) => {

        this.episode = res;

      });

  }

}
