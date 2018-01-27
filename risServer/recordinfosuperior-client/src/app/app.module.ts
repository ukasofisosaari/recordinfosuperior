import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
