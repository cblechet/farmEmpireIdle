import { Injectable } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; // Importer à partir du chemin de compatibilité
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Import the correct package

@Injectable({
  providedIn: 'root'
})

  export class AuthService {

    constructor(private afAuth: AngularFireAuth) {} // Replace AngularFireAuthModule with AngularFireAuth

    // ...

    async signUp(email: string, password: string) {
      try {
        const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
        console.log(result);
        // Gestion post-inscription (ex: envoi d'email de vérification)
      } catch (error) {
        console.error(error);
        // Gestion des erreurs d'inscription
      }
    }

     // Connexion
  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      console.log(result);
      // Gestion post-connexion
    } catch (error) {
      console.error(error);
      // Gestion des erreurs de connexion
    }
  }

  // Déconnexion
  async logout() {
    try {
      await this.afAuth.signOut();
      // Actions post-déconnexion
    } catch (error) {
      console.error(error);
      // Gestion des erreurs de déconnexion
    }
  }
  }

 

