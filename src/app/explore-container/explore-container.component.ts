import { Component, OnInit } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {

  constructor(private midb : Storage) { }

  async ngOnInit() {
    await this.midb.get("productos").then((quecosa) => {
      console.log(quecosa);

    });
  }

}
