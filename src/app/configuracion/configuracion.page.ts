import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../api/manager.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {

  constructor(
    private api : ManagerService
  ) { }

  ngOnInit() {
    const pokemon = {
      nombre: "Pikachu",
      tipo: "Electrico"
    }
    this.api.CreatePokemon(pokemon);

    console.log(this.api.GetPokemon());
  }

}
