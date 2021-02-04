import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EpisodeListPageRoutingModule } from './episode-list-routing.module';

import { EpisodeListPage } from './episode-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EpisodeListPageRoutingModule
  ],
  declarations: [EpisodeListPage]
})
export class EpisodeListPageModule {}
