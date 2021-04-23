import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent {
  zoom: number = 8;

  lat: number = 12.906;
  lng: number = 77.594;

  constructor(private router: Router) {
    window.navigator.geolocation.getCurrentPosition((position) => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      this.zoom=8;
     
    });
  }
  button() {
    this.router.navigate(['./profile']);
  }
  markers: marker[] = [
    {
      lat: 51.678418,
      lng: 7.809008,
      label: 'A',
      draggable: true,
    },
    {
      lat: 10.906,
      lng: 72.594,
      label: 'B',
      draggable: false,
    },
    {
      lat: 12.906,
      lng: 77.594,
      label: 'C',
      draggable: false,
    },
  ];
}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label: string;
  draggable: boolean;
}
