import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-messages-page',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './messages-page.component.html'
})
export class MessagesPageComponent {
  protected readonly messages: string[] = [
    'Tu es une personne rare, simple a apprecier et difficile a oublier.',
    'Ta presence rend les moments ordinaires beaucoup plus agreables.',
    'Ton sourire et ta bonne humeur font toujours du bien autour de toi.',
    'Aujourd hui est une belle occasion de te rappeler que tu comptes vraiment.',
    'Ton energie apporte quelque chose de calme, de doux et de positif.',
    'Je suis content de te connaitre et de pouvoir te souhaiter cette journee.'
  ];
}
