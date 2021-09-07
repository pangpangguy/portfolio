import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.css'],
})
export class ExperiencePageComponent implements OnInit {
  showWork = true;
  constructor() {}

  ngOnInit(): void {}

  onShowWork() {
    this.showWork = true;
  }

  onShowProjects() {
    this.showWork = false;
  }
}
