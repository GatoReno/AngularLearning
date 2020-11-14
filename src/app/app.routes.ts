 import { Component } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent }  from './components/about/about.component';
import { ClientsComponent }  from './components/clients/clients.component';
import { ClientComponent }  from './components/client/client.component';

//
 const APP_ROUTES : Routes = [
        { path:'home', component: HomeComponent },
        { path:'about', component: AboutComponent },
        { path:'clients', component: ClientsComponent },
        { path:'client/:id', component: ClientComponent },
        { path: '**', pathMatch: 'full', redirectTo:'' }
    ];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);