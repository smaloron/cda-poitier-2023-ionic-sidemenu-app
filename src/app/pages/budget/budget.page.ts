import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BudgetItem, BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.page.html',
  styleUrls: ['./budget.page.scss'],
})
export class BudgetPage implements OnInit {

  budgetList: BudgetItem[] = [];

  constructor(
    public budgetSrv: BudgetService,
    private alertCtrl: AlertController) { }

  ngOnInit() {
    this.budgetSrv.budgetChanged.subscribe(
      (response: any) => {

        console.log('response', response);

        this.budgetList = response;
      }
    );
    this.budgetSrv.loadItems();
  }

  async showAddItemDialog() {
    const alert = await this.alertCtrl.create({
      header: "Création d'un nouvel élément",
      buttons: [
        {
          text: "Annuler",
          role: "cancel"
        },
        {
          text: "Valider",
          handler: (data) => {
            this.budgetSrv.addItem(data);
          }
        }
      ],

      inputs: [
        {
          name: "label",
          type: "text",
          placeholder: "Votre recette ou dépense"
        },
        {
          name: "amount",
          type: "number",
          placeholder: "montant de la recette ou dépense"
        }
      ]
    });

    alert.present();
  }

  async showEditItemDialog(budgetItem: any) {
    const alert = await this.alertCtrl.create({
      header: "Modification d'un nouvel élément",
      buttons: [
        {
          text: "Annuler",
          role: "cancel"
        },
        {
          text: "Valider",
          handler: (data) => {
            data.id = budgetItem.id;
            this.budgetSrv.updateItem(data);
          }
        }
      ],

      inputs: [
        {
          name: "label",
          type: "text",
          placeholder: "Votre recette ou dépense",
          value: budgetItem.label
        },
        {
          name: "amount",
          type: "number",
          placeholder: "montant de la recette ou dépense",
          value: budgetItem.amount
        }
      ]
    });

    alert.present();
  }

  async showDeleteDialog(id: any) {
    const alert = await this.alertCtrl.create({
      header: "Voulez-vous vraiment supprimer ?",
      buttons: [
        {
          text: "NON",
          role: "cancel"
        },
        {
          text: "OUI",
          handler: () => {
            this.budgetSrv.removeItem(id)
          },
        }
      ]
    });

    alert.present();
  }

}
