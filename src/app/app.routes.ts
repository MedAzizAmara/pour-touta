import { Routes } from '@angular/router';
import { FriendshipPageComponent } from './pages/friendship-page.component';
import { HomePageComponent } from './pages/home-page.component';
import { MessagesPageComponent } from './pages/messages-page.component';
import { SpecialMessagePageComponent } from './pages/special-message-page.component';
import { WishesPageComponent } from './pages/wishes-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'messages', component: MessagesPageComponent },
  { path: 'amitie', component: FriendshipPageComponent },
  { path: 'message-special', component: SpecialMessagePageComponent },
  { path: 'voeux', component: WishesPageComponent },
  { path: '**', redirectTo: '' }
];
