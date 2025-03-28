import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [RouterModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  constructor(private route: ActivatedRoute, private title: Title, private meta: Meta) { }
  //permet de gérer la navigation à l'intérieur d'une page
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
    this.title.setTitle('Accueil | Mon site de développement web');

    // Mettre à jour ou ajouter une meta description
    this.meta.updateTag({
      name: 'description',
      content: 'Découvrez notre agence de développement web spécialisée en Angular, Node.js et accessibilité.'
    });
  }
}