import {
  state,
  style,
  transition,
  trigger,
  animate,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-items',
  templateUrl: './nav-items.component.html',
  styleUrls: ['./nav-items.component.css'],
  animations: [
    trigger('textAnimation', [
      state(
        'hide',
        style({
          visibility: 'hidden',
          transform: 'translateX(0)',
        })
      ),
      state(
        'show',
        style({
          visibility: 'visible',
          transform: 'translateX(20px)',
          color: 'var(--neon-green)',
        })
      ),
      transition('hide => show', animate(350)),
      transition('show => hide', animate(100)),
    ]),
  ],
})
export class NavItemsComponent implements OnInit {
  @Input() icon: string;
  @Input() nav_link: string;
  @Input() text: string;

  showText = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  changeState() {
    this.showText = !this.showText;
  }

  isCurrentRoute() {
    return this.router.url === this.nav_link;
  }

  setState() {
    if (this.isCurrentRoute() || this.showText) {
      return 'show';
    } else {
      return 'hide';
    }
  }
}
