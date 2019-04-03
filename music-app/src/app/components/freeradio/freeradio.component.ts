import { Component, OnInit } from '@angular/core';
import { Song } from '../../model/song';
import { SongsService } from '../../services/songs.service';

@Component({
  selector: 'app-freeradio',
  templateUrl: './freeradio.component.html',
  styleUrls: ['./freeradio.component.css']
})
export class FreeradioComponent implements OnInit {

  constructor(private songsService: SongsService) { }

  songs: Song[];
  currentSong: number;

  next() {
      this.currentSong = this.songs[this.currentSong].song_id + 3;
      if (this.currentSong > 9 ) {
        this.currentSong = 1;
      }
    }
  previous() {
    this.currentSong = this.songs[this.currentSong].song_id - 5;

    if (this.currentSong < 1) {
      this.currentSong = 9;
    }
}

  // getMockSongs(): void {
  //   this.songsService.getMockSongs()
  //     .subscribe(songs => this.songs = songs);
  // }

  ngOnInit() {
    // this.getMockSongs();
    this.currentSong = 1;
    console.log('all songs are soon to be displayed.. from the backend.. maybe..');
    this.songsService.getAllSongs()
    .subscribe(songs => {
      this.songs = songs;
    });
  }
}
