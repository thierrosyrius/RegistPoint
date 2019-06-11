import { Component, OnInit } from '@angular/core';
import {GererPersonne} from '../../../ServicesD/GererService';
import {DonneesPersonne} from '../../../ServicesD/DonneesService';
import {element} from 'protractor';

@Component({
  selector: 'app-list-personne',
  templateUrl: './list-personne.component.html',
  styleUrls: ['./list-personne.component.scss']
})
export class ListPersonneComponent implements OnInit {
  personnList: DonneesPersonne[];

  constructor(private servicePersonne:GererPersonne) { }

  ngOnInit() {
    var x=this.servicePersonne.getPersonne();
    x.snapshotChanges().subscribe(item =>{
      this.personnList=[];
      item.forEach(element=>{
        var y=element.payload.toJSON();
        y["$key"]=element.key;
        this.personnList.push(y as DonneesPersonne);
      })
    })

  }
  OnEditerPerson(person:DonneesPersonne){
    this.servicePersonne.selectPersonne=Object.assign({},person);
  }
  OnsuppPerson(key:string){
    this.servicePersonne.SupprimerPersonne(key);
  }

}
