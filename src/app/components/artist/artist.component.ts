import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { LastFmService } from '../../services/lastFm.service';

@Component({
  moduleId: module.id,
  selector: 'artist',
  templateUrl: 'artist.component.html',
  providers: [LastFmService]
})
export class ArtistComponent implements OnInit  {
  private track: Object;
  private loading: boolean;

  constructor(
    private _lastFmService:LastFmService,
    private _route:ActivatedRoute) {
  }

  ngOnInit() {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.loading = true;
        this._lastFmService.infoTrack(id)
          .subscribe(res => {
            this.track = res.track;
            this.loading = false;
          });
      })
  }

}