import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  constructor(private db : Storage) { }

  async ngOnInit() {
    let obj = {
      producto: "Pelota de futbol",
      precio: 5000,
      esredonda: false,
      fechacompra: new Date()
    }

    await this.db.set("productos", obj);
    


  }

}
