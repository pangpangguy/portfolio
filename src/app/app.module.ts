import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadingTitleComponent } from './heading-title/heading-title.component';
import { NavigationCardComponent } from './navigation-card/navigation-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadingTitleComponent,
    NavigationCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
