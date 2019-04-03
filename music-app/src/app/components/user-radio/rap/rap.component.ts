import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { SongsService } from '../../../services/songs.service';
import { Song } from '../../../model/Song';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-rap',
  templateUrl: './rap.component.html',
  styleUrls: ['./rap.component.css']
})
export class RapComponent implements OnInit {

    constructor(private songsService: SongsService, private authService: AuthService) { }

    songs: Song[];
    userNavs: Array<{title: string}>;
    currentSong: number;
    subid: number;

    next() {
      this.currentSong = this.songs[this.currentSong].song_id;
      if (this.currentSong > 15 ) {
        this.currentSong = 12;
        console.log(this.currentSong);
    }
  }
    previous() {
    this.currentSong = this.songs[this.currentSong].song_id - 2;
    if (this.currentSong < 13) {
      this.currentSong = 15;
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
    this.currentSong = 13;
    console.log('all songs are soon to be displayed.. from the backend.. maybe..');
    this.songsService.getAllSongs()
    .subscribe(songs => {
      this.songs = songs;
    });
  }

}
