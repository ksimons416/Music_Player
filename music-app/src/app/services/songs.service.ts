import { Injectable } from '@angular/core';
import { Song } from '../model/Song';
import { Observable, of } from 'rxjs';
// import { mockSongs } from '../model/mocksongs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) {
  }

  getAllSongs(): Observable<Song[]> {
    return this.httpClient.get<Song[]>(`${this.apiUrl}` + `/login/freeradio`);
  }
}
