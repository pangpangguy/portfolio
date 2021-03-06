import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../project.model';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;

  constructor() {}

  ngOnInit(): void {}

  githubAvailable() {
    return this.project.github != '';
  }
  siteAvailable() {
    return this.project.site != '';
  }

  getTechnologies() {
    return this.project.technologies.join('');
  }
}
