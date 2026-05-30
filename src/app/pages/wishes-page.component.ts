import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-wishes-page',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './wishes-page.component.html'
})
export class WishesPageComponent {
  protected readonly wishes: string[] = [
    'Beaucoup de joie dans ton coeur et de serenite dans tes journees.',
    'De la reussite dans ce que tu entreprends et de belles surprises a venir.',
    'Des gens sinceres autour de toi et des moments dont tu garderas le sourire.',
    'Une nouvelle annee de vie encore plus belle que la precedente.'
  ];
}
