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

  async ngOnInit() {  
    const pokemon = {
      nombre: "Pikachu",
      tipo: "Electrico"
    }
    await this.api.CreatePokemon(pokemon);

    const pokemonGet = await this.api.GetPokemon();
    console.log(pokemonGet);
  }

}
