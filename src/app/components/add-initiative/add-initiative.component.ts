import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AddinitiativeService } from '../../services/addinitiative.service';

@Component({
  selector: 'app-add-initiative',
  templateUrl: './add-initiative.component.html',
  styleUrls: ['./add-initiative.component.css']
})
export class AddInitiativeComponent implements OnInit {

 initiativetitle; objectivefilled; body;

  constructor( private initService:AddinitiativeService) { }


  ngOnInit() {
  }

  addInitiative(){
    let addInit = {
      initiativetitle:this.initiativetitle,
      objectivefilled:this.objectivefilled,
      body:this.body

    }
    this.initService.addInit(addInit)
  
  }

}
