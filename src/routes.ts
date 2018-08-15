import {Routes} from '@angular/router';
import { HomeComponent } from './app/components/home/home.component';
import { LoginComponent } from './app/components/login/login.component';
import { NavComponent } from './app/components/nav/nav.component';
import { SideNavComponent } from './app/components/side-nav/side-nav.component';
import { FooterComponent } from './app/components/footer/footer.component';
import { AddInitiativeComponent } from './app/components/add-initiative/add-initiative.component';



export const appRoutes: Routes = [
    {path:'', component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'nav', component:NavComponent},
    {path:'side-nav', component:SideNavComponent},
    {path:'footer', component:FooterComponent},
    {path:'add-initiative', component:AddInitiativeComponent}
]