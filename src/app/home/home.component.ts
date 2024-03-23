import { Component, OnInit  } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private authService: AuthService, private afAuth: AngularFireAuth, private router: Router) {}

  signIn(email: string, password: string) {
    this.authService.signIn(email, password);
  }
  ngOnInit(): void {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.router.navigate(['/game']);
      }
    });
  }
}
