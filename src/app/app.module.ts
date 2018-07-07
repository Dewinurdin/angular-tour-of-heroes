import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// NgModel lives in FormsModule
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    // add FormsModule into @NgModule metadata
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
