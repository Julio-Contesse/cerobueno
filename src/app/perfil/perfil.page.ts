import { Component, OnInit } from '@angular/core';
import { GpsService } from '../api/gps.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private gps : GpsService) { 

  }

  ngOnInit() {
    this.gps.obtenerPosicion();
  }

}
