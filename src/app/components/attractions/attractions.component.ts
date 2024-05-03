import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { GoogleMapsModule, MapMarker, MapInfoWindow } from '@angular/google-maps';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import { Marker } from '../../model/marker';
import { Radius } from '../../enums/radius';
import { LatLng } from '../../model/latlng';

@Component({
  selector: 'app-attractions',
  standalone: true,
  imports: [ GoogleMapsModule ],
  templateUrl: './attractions.component.html',
  styleUrl: './attractions.component.css',
  changeDetection: ChangeDetectionStrategy.Default
})
export class AttractionsComponent {

  options = {
    center: {
      lat: 52.2456545,
      lng: 21.0063041
    },
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [{
      featureType: "poi",
      stylers: [
        { visibility: "off" }
      ] 
    }]
  };

  private defaultIcon = {
    path: faLocationDot.icon[4] as string,
    fillOpacity: 1,
    anchor: new google.maps.Point(
      faLocationDot.icon[0] / 2,
      faLocationDot.icon[1] 
    ),
    strokeWeight: 1,
    strokeColor: "black",
    scale: 0.05,
  };

  blueIcon = { ...this.defaultIcon, fillColor: "blue" };

  greenIcon = { ...this.defaultIcon, fillColor: "green"};

  radius = Radius;

  @Input()
  currentPosition = this.options.center;

  @Input()
  markers: Marker[] | null = null;

  @Input()
  selectedMarker: Marker | null = null;

  @Output()
  changeRadius = new EventEmitter<number>();

  @Output()
  changeSelectedMarker = new EventEmitter<Marker>();

  @Output()
  changeCurrentPosition = new EventEmitter<LatLng>()

  @ViewChild(MapInfoWindow, { static: false })
  infoWindow!: MapInfoWindow

  onChangeRadius(radius: number) {
    this.changeRadius.emit(radius);
  }

  onChangeSelectedMarker(marker: Marker) {
    this.changeSelectedMarker.emit(marker);
  }

  onMapClick(latLng: google.maps.LatLng | null) {
    if (latLng) {
      this.changeCurrentPosition.emit({ lat: latLng.lat(), lng: latLng.lng() });
    }
  }

  onMarkerClick(marker: MapMarker, selectedMarker: Marker) {
    this.onChangeSelectedMarker(selectedMarker);
    this.infoWindow.open(marker);
  }

}
