import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { User } from 'firebase/auth';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  userEmail$!: Observable<string | null>;

  constructor(private authService: AuthService, private router: Router) {
    this.userEmail$ = this.authService.getUserEmail();
  }

  ngOnInit() {
    this.authService.getUser().subscribe((user: User | null) => {
      if (!user) {
        this.router.navigate(['/home']); // Redirige vers la page d'accueil si non connecté
      } else {
        this.userEmail$ = this.authService.getUserEmail(); // Assure-toi que cette méthode retourne Observable<string | null>
      }
    });
  }

  logout() {
    this.authService.logout();
  }
}
