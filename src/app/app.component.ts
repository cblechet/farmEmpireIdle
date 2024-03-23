import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../assets/template.scss']
})
export class AppComponent {
  currentUrl: string = '';

  constructor(private router: Router) {
    // Écoute les changements d'URL
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Met à jour l'URL actuelle
        this.currentUrl = event.url;
      }
    });
  }
}