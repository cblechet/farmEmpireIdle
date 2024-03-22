import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; // Assure-toi que le chemin est correct

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'] // Utilise styleUrls au lieu de styleUrl
})
export class SignupComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  signUp(email: string, password: string) {
    this.authService.signUp(email, password);
  }
}
