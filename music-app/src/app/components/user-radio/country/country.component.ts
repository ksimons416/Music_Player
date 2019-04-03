import { Component, OnInit } from '@angular/core';
import { SongsService } from '../../../services/songs.service';
import { Song } from '../../../model/Song';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

    constructor(private songsService: SongsService, private authService: AuthService) { }

    songs: Song[];
    userNavs: Array<{title: string}>;
    currentSong: number;
    subid: number;

    next() {
      this.currentSong = this.songs[this.currentSong].song_id ;
      if (this.currentSong > 12 ) {
        this.currentSong = 10;
      }
    }
    previous() {
    this.currentSong = this.songs[this.currentSong].song_id - 2;
    if (this.currentSong < 10) {
      this.currentSong = 12;
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
    this.currentSong = 10;
    this.songsService.getAllSongs()
    .subscribe(songs => {
      this.songs = songs;
    });

  }
}
