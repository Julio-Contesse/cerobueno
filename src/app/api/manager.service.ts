import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(
    private db : Storage
  ) { }

  async CreatePokemon(obj : any){
    await this.db.set("pokemon", obj);
  }

  async GetPokemon(){
    await this.db.get("pokemon").then((que) => {
      return que;
    }).catch((exception) => {
      console.error(exception);
      return null;
    }).finally(() => {
      console.log("terminó el proceso!!");
    })
  }

}
