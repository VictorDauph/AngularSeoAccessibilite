import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  constructor(private router: Router) { }

  apiError: String | null = null;

  onSubmit(form: any) {
    let errorSimulation: boolean = true;
    if (form.valid && !errorSimulation) {
      // simule le Traitement des données du formulaire, par exemple envoi au serveur
      console.log('Form Submitted!', form.value);
      this.router.navigate(['/']);
    } else {
      console.log('apiError');
      this.apiError = 'Erreur lors de la soumission du formulaire';
    }
  }
}
