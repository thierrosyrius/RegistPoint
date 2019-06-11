import { Component, OnInit } from '@angular/core';
import {GererPersonne} from '../../../ServicesD/GererService';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.scss']
})
export class PersonneComponent implements OnInit {

  constructor(private servicePersonne:GererPersonne) { }

  ngOnInit() {
    this.OnActualiser();
    this.servicePersonne.getPersonne();
  }
  OnAjouter(personneForm:NgForm){
    if(personneForm.value.$key==null)
    this.servicePersonne.AjouterPersonne(personneForm.value);
    else
      this.servicePersonne.ModifierPersonne(personneForm.value);
      this.OnActualiser(personneForm);

  }
  OnActualiser(personneForm?:NgForm){
    if(personneForm !=null)
      personneForm.reset();
    this.servicePersonne.selectPersonne={
      $key:null,
      dateJour:'',
      nom:'',
      heureArriv:'',
      heureDepart:''
    }

  }

}
