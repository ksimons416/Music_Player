import { Component, OnInit } from '@angular/core';
import { SongsService } from '../../../services/songs.service';
import { Song } from '../../../model/Song';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-edm',
  templateUrl: './edm.component.html',
  styleUrls: ['./edm.component.css']
})
export class EdmComponent implements OnInit {

    constructor(private songsService: SongsService, private authService: AuthService) { }

    songs: Song[];
    userNavs: Array<{title: string}>;
    currentSong: number;
    subid: number;

    next() {
      this.currentSong = this.songs[this.currentSong].song_id ;
      if (this.currentSong > 9 ) {
        this.currentSong = 7;
      }
    }
  previous() {
    this.currentSong = this.songs[this.currentSong].song_id - 2;
    if (this.currentSong < 7) {
      this.currentSong = 9;
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
    this.currentSong = 7;
    console.log('all songs are soon to be displayed.. from the backend.. maybe..');
    this.songsService.getAllSongs()
    .subscribe(songs => {
      this.songs = songs;
    });
  }

}

