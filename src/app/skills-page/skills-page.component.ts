import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.css'],
})
export class SkillsPageComponent implements OnInit {
  proficient: String[] = ['Java', 'Angular 2+', 'Bootstrap'];
  familiar: String[] = [
    'JavaScript (ES6+)',
    'Node',
    'Express.js',
    'Python',
    'C',
    'Rust',
    'SQL',
    'ElasticSearch + Kibana',
    'Oracle',
    'MongoDB',
    'Figma',
  ];
  constructor() {}

  ngOnInit(): void {}

  findNbCols(items: String[]) {
    var cols = items.length / 4;
    return items.length % 4 == 0 ? cols : cols + 1;
  }
}
