import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-navigation-card',
  templateUrl: './navigation-card.component.html',
  styleUrls: ['./navigation-card.component.css'],
})
export class NavigationCardComponent implements OnInit {
  @Input() title: String = '';
  @Input() routeName: String = '';

  constructor() {}

  ngOnInit(): void {}

  getImagePath() {
    return `../../assets/images/${this.title}.png`;
  }

  getRouteName() {
    return '/' + this.routeName.toLowerCase();
  }
}
