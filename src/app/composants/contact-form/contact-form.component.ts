import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted!', form.value);
      // Traitement des données du formulaire, par exemple envoi au serveur
    } else {
      console.log('Form is not valid');
    }
  }
}
