import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileInformationComponent } from './profile-information/profile-information.component';
import { FeedComponent } from './feed/feed.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'feed',
    component: FeedComponent
  },
  {
    path: 'profile/:id',
    component: ProfileInformationComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
