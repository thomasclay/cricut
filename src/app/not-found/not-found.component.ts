import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { MatTableModule } from '@angular/material/table';

interface SpaceData {
  id: number;
  title: string;
  summary: string;
  news_site: string;
  image_url: string;
}
@Component({
  selector: 'app-not-found',
  imports: [ MatTableModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'summary', 'news_site', 'image_url'];
  dataSource : SpaceData[] = [];

  constructor(private _httpClient: HttpClient) {
  }
  ngOnInit(): void {
    const offset = Math.floor(Math.random() * 30000);
    const url = `https://api.spaceflightnewsapi.net/v4/articles?limit=5&offset=${offset}`;
    let subscription = this._httpClient.get(url).subscribe(data => {
      this.dataSource = (data as any).results;
      subscription.unsubscribe();
    });
  }
}
