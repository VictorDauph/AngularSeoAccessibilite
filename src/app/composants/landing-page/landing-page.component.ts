import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [RouterModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  constructor(private route: ActivatedRoute) { }
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
}
