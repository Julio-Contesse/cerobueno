import { Component, OnInit, Input } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;


  constructor(private midb : Storage) { }

  async ngOnInit() {
    await this.midb.get("productos").then((informacion) => {
      console.log(informacion);

    });


  }

}
