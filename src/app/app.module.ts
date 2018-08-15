import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import {appRoutes} from '../routes';
import { FormsModule } from '@angular/forms';
import {AngularFireDatabaseModule} from 'angularfire2/database';


import { environment } from '../environments/environment'; 
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { AddInitiativeComponent } from './components/add-initiative/add-initiative.component';
import { AngularFireModule } from 'angularfire2';
import { InitiativeComponent } from './components/initiative/initiative.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    NavComponent,
    SideNavComponent,
    AddInitiativeComponent,
    InitiativeComponent,
   
  ],
  imports: [
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
