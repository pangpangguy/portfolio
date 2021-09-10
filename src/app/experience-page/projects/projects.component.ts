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
      'Firefighting robots Simulator',
      'A pathfinding visualiser simulating little robot firefighters as part of a school project. Algorithms implemented: DFS, BFS, Djistra, A*. Built in Java.',
      ['Java'],
      'https://gitlab.ensimag.fr/teel/robot-firefighters-projetpoo'
    ),
    new Project(
      'Storytime',
      'A web application that allows users to collectively create multiple-choice-style story game. User can create and modify different stories, add choices to stories from other users, create different endings for a story..etc',
      ['Java', 'Oracle', 'ApacheTomcat'],
      'https://gitlab.ensimag.fr/bugaudz/web'
    ),
    new Project(
      'Quotes Generator',
      'A quotes generator. Read quotes from some inspiring figures, and share them on twitter!',
      ['JS', 'Bootstrap'],
      'https://github.com/pangpangguy/jokes_generator',
      'https://pangpangguy.github.io/quotes-generator/'
    ),
    new Project(
      'Blob War',
      'A Rust implementation of the classic Blob Wars game, with AIs as opponent that utilizes various algorithms such as Minimax, Greedy and Alpha-beta pruning',
      ['Rust'],
      'https://github.com/pangpangguy/blobwar'
    ),
    new Project(
      'Kebab Seeker',
      'Yelp but exclusively for kebabs. A fun project that allows user to search for kebab locations and details.',
      ['JS', 'Express', 'MongoDB', 'Bootstrap'],
      'https://github.com/pangpangguy/kebab'
    ),
    new Project(
      'Deca Compiler',
      "A compiler for the programming language Deca, developped in Java. Unfortunately it's a school project so I won't be able to share the source code publicly.",
      ['Java', 'ANTLR', 'Maven']
    ),
    new Project(
      'Jokes Generator',
      'A joke generator. Read some jokes to light up your day. Get ready to start laughing!',
      ['JS', 'Bootstrap'],
      'https://github.com/pangpangguy/jokes_generator',
      'https://pangpangguy.github.io/jokes_generator/'
    ),
    new Project(
      'Score Tracker',
      'A good old score tracker for friday nights beer pong.',
      ['JS', 'Bootstrap'],
      'https://github.com/pangpangguy/scoreKeeper',
      'https://pangpangguy.github.io/scoreKeeper/'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
