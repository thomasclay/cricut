import { AfterViewInit, Component, OnInit } from '@angular/core';

import { MatTableModule } from '@angular/material/table';

import { SpaceFLightArticle, SpaceFlightNewsService } from '../../services/spaceFlightNews/space-flight-news.service';

@Component({
  selector: 'app-not-found',
  imports: [ MatTableModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'title', 'summary', 'news_site', 'image_url'];
  dataSource : SpaceFLightArticle[] = [];

  constructor(private _newsService: SpaceFlightNewsService) {
  }

  ngAfterViewInit(): void {
    let subscription = this._newsService.getArticles()
      .subscribe(data => {
        this.dataSource = data
        subscription.unsubscribe();
    });
  }
}
