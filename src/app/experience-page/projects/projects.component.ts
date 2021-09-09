import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    new Project(
      'Deca Compiler',
      "A compiler for the programming language Deca, developped in Java. Unfortunately it's a school project so I won't be able to share the source code publicly."
    ),
    new Project(
      'Firefighting robots Simulator',
      'A pathfinding visualiser simulating little robot firefighters as part of a school project. Algorithms implemented: DFS, BFS, Djistra, A*. Built in Java.',
      'https://gitlab.ensimag.fr/teel/robot-firefighters-projetpoo'
    ),
    new Project(
      'Quotes Generator',
      'A quotes generator. Read quotes from some inspiring figures, and share them on twitter!',
      'https://github.com/pangpangguy/jokes_generator',
      'https://pangpangguy.github.io/quotes-generator/'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
