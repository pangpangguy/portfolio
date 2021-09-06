import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  templateUrl: './section-heading.component.html',
  styleUrls: ['./section-heading.component.css'],
})
export class SectionHeadingComponent implements OnInit {
  @Input() section_title: String = '';
  constructor() {}

  ngOnInit(): void {}
}
