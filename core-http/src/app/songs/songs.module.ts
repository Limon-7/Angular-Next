import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongsRoutingModule } from './songs-routing.module';
import { ArtistMusicVideoComponent } from './artist-music-video/artist-music-video.component';
import { ArtistTrackListComponent } from './artist-track-list/artist-track-list.component';
import { ArtistAlbumListComponent } from './artist-album-list/artist-album-list.component';
import { ArtistComponent } from './artist/artist.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [ArtistMusicVideoComponent, ArtistTrackListComponent, ArtistAlbumListComponent, ArtistComponent, LayoutComponent],
  imports: [
    CommonModule,
    SongsRoutingModule
  ],
  exports: [
    ArtistMusicVideoComponent, ArtistTrackListComponent, ArtistAlbumListComponent, ArtistComponent
  ]
})
export class SongsModule { }
