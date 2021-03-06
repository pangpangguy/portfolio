import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeadingTitleComponent } from './heading-title/heading-title.component';
import { NavigationCardComponent } from './navigation-card/navigation-card.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { AppRoutingModule } from './app-routing.module';
import { SectionHeadingComponent } from './section-heading/section-heading.component';
import { WorkExperienceComponent } from './experience-page/work-experience/work-experience.component';
import { ProjectsComponent } from './experience-page/projects/projects.component';
import { ProjectComponent } from './experience-page/projects/project/project.component';
import { NavItemsComponent } from './nav-items/nav-items.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeadingTitleComponent,
    NavigationCardComponent,
    AboutPageComponent,
    WelcomePageComponent,
    ContactPageComponent,
    ExperiencePageComponent,
    SkillsPageComponent,
    SectionHeadingComponent,
    WorkExperienceComponent,
    ProjectsComponent,
    ProjectComponent,
    NavItemsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
