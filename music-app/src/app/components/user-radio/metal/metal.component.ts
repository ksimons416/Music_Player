import { Component, OnInit } from '@angular/core';
import { Song } from '../../../model/Song';
import { SongsService } from '../../../services/songs.service';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-metal',
  templateUrl: './metal.component.html',
  styleUrls: ['./metal.component.css']
})
export class MetalComponent implements OnInit {
  constructor(private songsService: SongsService, private authService: AuthService) { }

  songs: Song[];
  userNavs: Array<{title: string}>;
  currentSong: number;
  subid: number;

next() {
    this.currentSong = this.songs[this.currentSong].song_id ;
    if (this.currentSong > 6 ) {
      this.currentSong = 4;
    }
  }
previous() {
  this.currentSong = this.songs[this.currentSong].song_id - 2;
  if (this.currentSong < 4) {
    this.currentSong = 6;
  }
}
ngOnInit() {
  if (this.authService.hasRoles(1)) {
    this.userNavs = environment.UserNav;
    this.subid = 1;
  } else if (this.authService.hasRoles(2)) {
    this.userNavs = environment.NonSubNav;
    this.subid = 2;
  }
  this.currentSong = 4;
  console.log('all songs are soon to be displayed.. from the backend.. maybe..');
  this.songsService.getAllSongs()
  .subscribe(songs => {
    this.songs = songs;
  });
  }
}
