import { Component } from '@angular/core';

@Component({
  selector: 'app-chicken-coop',
  templateUrl: './chicken-coop.component.html',
  styleUrls: ['./chicken-coop.component.scss'] 
})

export class ChickenCoopComponent {
  money: number = 0; // Remplace grains par money
  moneyPerClick: number = 1; // Argent gagné par clic
  upgradeLevel: number = 0; // Niveau d'amélioration
  isAutomated: boolean = false;
  progressTowardsNextLevel: number = 0
  
  earnMoney() {
    this.money += this.moneyPerClick;
  }

  constructor() {
    // Vérifie l'automatisation à chaque intervalle
    setInterval(() => {
      if (this.isAutomated) {
        this.money += this.moneyPerClick;
      }
    }, 1000); // Ajoute de l'argent chaque seconde si automatisé
  }

  buyUpgrade() {
    const upgradeCost = this.calculateUpgradeCost();
    if (this.money >= upgradeCost) {
      this.money -= upgradeCost;
      this.upgradeLevel++;
      this.moneyPerClick *= 2; // Double les gains par clic
      // Active l'automatisation au niveau 10
      if (this.upgradeLevel == 10) {
        this.isAutomated = true;
      }
    }
  }

  calculateUpgradeCost() {
    return 10 * Math.pow(2, this.upgradeLevel); // Exemple de calcul du coût
  }

  getProgress() {
    const currentCost = this.calculateUpgradeCost();
    // Calcule le pourcentage de l'argent actuel par rapport au coût de l'amélioration
    // Assure-toi de limiter la valeur à 100% maximum
    const progress = (this.money / currentCost) * 100;
    return Math.min(progress, 100); // Empêche la barre de dépasser 100%
  }

  updateProgress(amount: number) {
    this.progressTowardsNextLevel += amount;
    let upgradeCost = this.calculateUpgradeCost();

    // Vérifier si le joueur a assez pour passer au niveau suivant
    if (this.progressTowardsNextLevel >= upgradeCost) {
      this.progressTowardsNextLevel -= upgradeCost; // Reset la progression pour le prochain niveau
      this.upgradeLevel++;
      this.moneyPerClick *= 2; // Par exemple, doubler les gains par clic
      // Reset ou ajuste pour le prochain niveau ici si nécessaire
    }
  }

}
