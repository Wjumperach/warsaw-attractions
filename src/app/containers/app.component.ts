import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { AttractionsComponent } from '../components/attractions/attractions.component';
import { AppStateService } from '../services/app-state.service';
import { Marker } from '../model/marker';
import { Radius } from '../enums/radius';
import { LatLng } from '../model/latlng';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ AttractionsComponent, AsyncPipe ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  title = 'warsaw-attractions';

  private appStateService = inject(AppStateService);

  currentPosition = this.appStateService.currentPosition;

  selectedMarker = this.appStateService.selectedMarker;
  
  markers = this.appStateService.markers500m;

  ngOnInit() {
    this.appStateService.loadAttractions();
  }

  changeRadius(radius: Radius) {
    switch (radius) {
      case Radius._500m: {
        this.markers = this.appStateService.markers500m;
        return;
      }
      case Radius._1km: {
        this.markers = this.appStateService.markers1km;
        return;
      }
      case Radius._2km: {
        this.markers = this.appStateService.markers2km;
        return;
      }
      default: {
        const exhaustCheck: never = radius;
      }
    }
  }

  changeSelectedMarker(marker: Marker) {
    this.appStateService.changeSelectedMarker(marker);
  }

  changeCurrentPosition(currentPosition: LatLng) {
    this.appStateService.changeCurrentPosition(currentPosition);
  }

}
