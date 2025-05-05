import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home',
      description: 'This is the home page of the application.',
      keywords: 'home, angular, application'
    }
  }, {
    path: 'user',
    component: UserComponent,
    data: {
      title: 'User Settings',
      description: 'This is the user settings of the application.',
      keywords: 'user, angular, application',
      menuItems:[
        { title: 'User', icon: 'person', link: '/user' },
        { title: 'Home', icon: 'home', link: '/' },
        { title: 'no Icon - Not found', link: '/invalid'}
      ]
    }
  }, {
    path: "**",
    component: NotFoundComponent,
    data: {
      title: "Page Not Found",
      description: "This is the page not found page of the application.",
      keywords: "page not found, angular, application"
    }
  }
];
