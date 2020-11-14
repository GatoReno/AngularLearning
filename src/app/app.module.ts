import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// ROUTES

import { APP_ROUTING } from './app.routes';


// SERVICES



// COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { OverLayCardComponent } from './components/over-lay-card/over-lay-card.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { BodyComponent } from './components/body/body.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ClientsComponent } from './components/clients/clients.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    OverLayCardComponent,
    StepperComponent,
    BodyComponent,
    HomeComponent,
    AboutComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
