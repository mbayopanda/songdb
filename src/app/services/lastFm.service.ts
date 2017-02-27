import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LastFmService {
  private searchUrl: string;

  constructor(private _http:Http){

  }

  public searchMusic(str: string) {
    this.searchUrl = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${str}&offset=0&limit=10&api_key=	99423f9ab0a1f77e41b50896ae0f160b&format=json`;
    return this._http.get(this.searchUrl)
      .map(res => res.json())
      .catch(this.handleError);
  }

  public infoTrack(mbid: string) {
    this.searchUrl = `http://ws.audioscrobbler.com/2.0/?method=track.getInfo&mbid=${mbid}&api_key=	99423f9ab0a1f77e41b50896ae0f160b&format=json`;
    return this._http.get(this.searchUrl)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
