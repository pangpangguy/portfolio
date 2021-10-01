import { Component } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  navigations: string[][] = [
    ['About', '/about', 'fas fa-address-book fa-2x'],
    ['Experience', '/experience', 'fas fa-briefcase fa-2x'],
    ['Skills', '/skills', 'fas fa-tools fa-2x'],
    ['Contacts', '/contacts', 'fas fa-phone-square fa-2x'],
    ['Homepage', '/', 'fas fa-undo fa-2x'],
  ];

  showNav = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        if (event.url != '/') {
          this.showNav = true;
        } else {
          this.showNav = false;
        }
      }
    });
  }
}
