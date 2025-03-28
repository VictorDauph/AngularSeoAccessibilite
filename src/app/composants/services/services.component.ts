import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [RouterModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  constructor(private route: ActivatedRoute, private title: Title, private meta: Meta) { }

  ngAfterViewInit() {
    // Vérifier le fragment après la navigation
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        // Trouver l'élément correspondant à l'ancre
        const element = document.getElementById(fragment);
        if (element) {
          // Faire défiler l'élément dans la vue avec un défilement fluide
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  ngOnInit(): void {
    // Définir dynamiquement le titre de la page
    this.title.setTitle('Nos Services');

    // Mettre à jour ou ajouter une meta description
    this.meta.updateTag({
      name: 'description',
      content: 'Découvrez nos services spécialisée en Angular, Node.js et accessibilité.'
    });
  }
}