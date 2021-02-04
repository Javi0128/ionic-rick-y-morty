import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home-routing.module').then( m => m.HomePageRoutingModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'user-list',
    loadChildren: () => import('./pages/user-list/user-list.module').then( m => m.UserListPageModule)
  },
  {
    path: 'profile/:id',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'episode-list',
    loadChildren: () => import('./pages/episode-list/episode-list.module').then( m => m.EpisodeListPageModule)
  },
  {
    path: 'episode-details/:id',
    loadChildren: () => import('./pages/episode-details/episode-details.module').then( m => m.EpisodeDetailsPageModule)
  },
  {
    path: 'location-list',
    loadChildren: () => import('./pages/location-list/location-list.module').then( m => m.LocationListPageModule)
  },
  {
    path: 'location-details/:id',
    loadChildren: () => import('./pages/location-details/location-details.module').then( m => m.LocationDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
