import { Injectable } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; // Importer à partir du chemin de compatibilité
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Import the correct package
import { AngularFireDatabase } from '@angular/fire/compat/database'; // Importer AngularFireDatabase
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'firebase/auth';
@Injectable({
  providedIn: 'root'
})

  export class AuthService {

  isLoggedIn = false;

  constructor(
    private afAuth: AngularFireAuth, 
    private db: AngularFireDatabase, 
    private router: Router, 
    private ngZone: NgZone
    ) {}


  // Connexion
  async signIn(email: string, password: string) {
    console.log(`Tentative de connexion avec l'email : ${email}`);
    try {
      event!.preventDefault();
      // Ici, nous capturons la réponse de signInWithEmailAndPassword dans la variable 'result'
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      console.log('Connexion réussie', result); // Affiche le résultat en cas de succès
      this.isLoggedIn = true;
      this.router.navigate(['/game']); // Redirection vers la page du jeu après connexion réussie
    } catch (error) {
      console.error('Erreur lors de la tentative de connexion', error); // Affiche les détails de l'erreur
    }
  }


  // Inscription
  async signUp(email: string, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      console.log(result);

      // Ajouter l'utilisateur à la base de données Firebase
      if (result.user) {
        await this.db.object(`users/${result.user.uid}`).set({ email: result.user.email });
      }

      // Gestion post-inscription (ex: envoi d'email de vérification)
    } catch (error) {
      console.error(error);
      // Gestion des erreurs d'inscription
    }
  }


  // Déconnexion
  async logout() {
    try {
      await this.afAuth.signOut();
      this.router.navigate(['/home']);
    } catch (error) {
      console.error(error);
      // Gestion des erreurs de déconnexion
    }
  }


  getUserEmail(): Observable<string | null> {
    return this.afAuth.authState.pipe(
      map(user => user ? user.email : null)
    );
  }

  getUser(): Observable<any | null> {
    return this.afAuth.authState;
  }

}

 

