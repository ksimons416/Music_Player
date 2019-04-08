import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Song } from '../../../model/song';
import { SongsService } from '../../../services/songs.service';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../model/User';

@Component({
  selector: 'app-rock',
  templateUrl: './rock.component.html',
  styleUrls: ['./rock.component.css']
})
export class RockComponent implements OnInit {
  constructor(private songsService: SongsService, private authService: AuthService) { }

  songs: Song[];
  user: User[];
  userNavs: Array<{title: string}>;
  currentSong: number;
  subid: number;

  ngOnInit() {
    if (this.authService.hasRoles(1)) {
      this.userNavs = environment.UserNav;
      this.subid = 1;
    } else if (this.authService.hasRoles(2)) {
      this.userNavs = environment.NonSubNav;
      this.subid = 2;
    }

    this.currentSong = Song[0];
    this.songsService.getRockSongs()
    .subscribe(songs => {
      this.songs = songs;
    });
  }

  next() {
      this.currentSong = this.songs[this.currentSong].song_id;
      if (this.currentSong > 3 ) {
        this.currentSong = 1;
      }
    }
  previous() {
    this.currentSong = this.songs[this.currentSong].song_id - 2;
    if (this.currentSong < 1) {
      this.currentSong = 3;
    }
  }

}
