import { Component } from '@angular/core';

import { LastFmService } from '../../services/lastFm.service';

import 'rxjs/add/operator/catch';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
  providers: [LastFmService]
})
export class SearchComponent  {
  search: string;
  loading: boolean;
  private tracks: Object[];

  constructor(private _lastFmService:LastFmService) {

  }

  searchMusic() {
    this.loading = true;
    this._lastFmService.searchMusic(this.search)
      .subscribe(res => {
        this.tracks = res.results.trackmatches.track;
        this.loading = false;
      });
  }
}