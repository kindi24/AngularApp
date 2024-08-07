import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

import { AppComponent } from './app.component';
import { OmdbService } from './omdb.service';



@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule  
  ],
  providers: [OmdbService, provideHttpClient(withFetch())],  
  bootstrap: []
})

export class AppModule { }
