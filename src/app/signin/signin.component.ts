import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
currentUrl: any;
constructor(private authService: AuthService) { }

  signIn(email: string, password: string) {
    this.authService.signIn(email, password);
  }
}
