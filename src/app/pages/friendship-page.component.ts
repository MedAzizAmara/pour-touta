import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-friendship-page',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './friendship-page.component.html'
})
export class FriendshipPageComponent {
  protected readonly notes: string[] = [
    'Une belle amitie, c est aussi savoir apprecier une personne pour ce qu elle est vraiment.',
    'Avec toi, les choses restent simples, vraies et agreables.',
    'Certaines presences rendent les journees plus legeres, et la tienne en fait partie.',
    'Tu merites d etre entouree de respect, de paix et de belles attentions.'
  ];
}
