import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonnesComponent } from './personnes/personnes.component';
import { PersonneComponent } from './personnes/personne/personne.component';
import { ListPersonneComponent } from './personnes/list-personne/list-personne.component';
import {DonneesPersonne} from '../ServicesD/DonneesService';
import {GererPersonne} from '../ServicesD/GererService';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import * as firebase from 'firebase';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {BsDatepickerModule, TimepickerModule} from 'ngx-bootstrap';
@NgModule({
  declarations: [AppComponent,
    PersonnesComponent, PersonneComponent, ListPersonneComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot()
  ],
  providers: [DonneesPersonne,
    GererPersonne],
  bootstrap: [AppComponent]
})
export class AppModule { }
