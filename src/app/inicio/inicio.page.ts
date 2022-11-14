import { Component, OnInit } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private db : Storage) { }

  async ngOnInit() {
    let obj = {
      producto: "Pelota de futbol",
      precio: 5000,
      esredonda: false,
      fechacompra: new Date()
    }

    await this.db.set("productos", obj);
    
    await this.db.get("productos").then((quecosa) => {
      console.log(quecosa);

    });
  }

}
