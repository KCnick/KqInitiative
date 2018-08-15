import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class AddinitiativeService {

  constructor( private db: AngularFireDatabase) { }

  addInit(message){
    this.db.list('Initiatives').push(message)
  }
}
