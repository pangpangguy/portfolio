import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadingTitleComponent } from './heading-title/heading-title.component';
import { NavigationCardComponent } from './navigation-card/navigation-card.component';
import { AboutPageComponent } from './about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadingTitleComponent,
    NavigationCardComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
