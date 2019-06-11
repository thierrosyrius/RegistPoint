import { Component, OnInit } from '@angular/core';
import {DonneesPersonne} from '../../ServicesD/DonneesService';
import {GererPersonne} from '../../ServicesD/GererService';

@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.component.html',
  styleUrls: ['./personnes.component.scss'],
  providers:[GererPersonne]
})
export class PersonnesComponent implements OnInit {

  constructor(private servicePersonne: GererPersonne) { }

  ngOnInit() {
  }

}
