import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthService, UserInterface } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit, OnDestroy {

  userInput!: UserInterface;

  constructor(private auth: AuthService, private toastCtrl: ToastController) {
    this.auth.registerSubject.subscribe(
      (success) => {
        if (success) {
          this.userInput = this.auth.getNewUser();
          this.showToast('Votre utilisateur a été enregistré');
        }
      }
    )
  }
  ngOnDestroy(): void {
    this.auth.registerSubject.unsubscribe();
  }

  async showToast(text: string) {
    const toast = await this.toastCtrl.create({
      message: text
    });

    toast.present();
  }

  ngOnInit() {
    this.userInput = this.auth.getNewUser();
  }

  register() {
    this.auth.register(this.userInput);
  }

}
