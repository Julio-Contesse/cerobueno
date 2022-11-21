import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablinks',
  templateUrl: './tablinks.page.html',
  styleUrls: ['./tablinks.page.scss'],
})
export class TablinksPage implements OnInit {

  constructor(private api : HttpClient) { }

  ngOnInit() {
    const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
    const resultado = this.api.get(url);
    console.log({resultado});
  }

}
