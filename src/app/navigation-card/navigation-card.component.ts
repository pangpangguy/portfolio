import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-navigation-card',
  templateUrl: './navigation-card.component.html',
  styleUrls: ['./navigation-card.component.css'],
})
export class NavigationCardComponent implements OnInit {
  @Input() title: String = '';
  constructor() {}

  ngOnInit(): void {}

  getImagePath() {
    console.log('test');
    return `../../assets/images/${this.title}.png`;
  }
}
