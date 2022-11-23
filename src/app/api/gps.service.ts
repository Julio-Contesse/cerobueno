import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Injectable({
  providedIn: 'root'
})
export class GpsService {

  constructor(private gps : Geolocation) { }

  async obtenerPosicion(){
    await this.gps.getCurrentPosition().then((lugar) => {
      console.log({lugar});
    }, (e) => {
      console.error(e);
    });
  }
}
