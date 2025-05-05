import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterOutlet, RouterLink, Router, ActivationStart } from '@angular/router';

import { filter } from 'rxjs';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

import { PageMenuItem } from '../pageMenuItem';

@Component({
  selector: 'app-root',
  imports: [
    NgIf,
    NgFor,
    CommonModule,
    RouterOutlet,
    RouterLink,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public PageTitle: string = 'Home';
  public pageMenuItems: Array<PageMenuItem> = [];

  constructor(router: Router) {
    router.events.pipe(filter((event) => event instanceof ActivationStart)).subscribe((event) => {
      const data = event.snapshot.data;
      this.pageMenuItems = data['menuItems'] ?? [];
      this.PageTitle = data['title'] ?? 'Unknown page name';
    });
  }
}