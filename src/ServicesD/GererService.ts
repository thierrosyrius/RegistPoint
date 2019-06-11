import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {DonneesPersonne} from './DonneesService';
@Injectable()

export class GererPersonne {
personnList:AngularFireList<any>;
selectPersonne: DonneesPersonne = new DonneesPersonne();
constructor(private firebase:AngularFireDatabase){}
getPersonne(){
  this.personnList = this.firebase.list('personnes');
  return this.personnList;
}
AjouterPersonne(personne:DonneesPersonne){
  this.personnList.push({
    dateJour:personne.dateJour,
    nom:personne.nom,
    heureArriv:personne.heureArriv,
    heureDepart:personne.heureDepart
  });
}
ModifierPersonne(personne:DonneesPersonne){
  this.personnList.update(personne.$key,{
    dateJour:personne.dateJour,
    nom:personne.nom,
    heureArriv:personne.heureArriv,
    heureDepart:personne.heureDepart
  });
}

 SupprimerPersonne($key:string){
  this.personnList.remove($key);


 }
}
