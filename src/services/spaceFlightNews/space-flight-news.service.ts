import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable } from 'rxjs';
import { LoggerService } from '../logger/logger.service';

export interface ArticleFilter {
  hasEvent?: boolean;
  hasLaunch?: boolean;
  isFeatured?: boolean;
  limit?: number;
  offset?: number;
}

export interface SpaceFLightArticle {
  id: number;
  title: string;
  summary: string;
  url: string;
  image_url: string;
  news_site: string;
  // more, but I don't want to type.
}

interface ArticleResponse {
  results: Array<SpaceFLightArticle>;
}

@Injectable({
  providedIn: 'root'
})
export class SpaceFlightNewsService {
  private readonly _baseUrl = 'https://api.spaceflightnewsapi.net/v4';

  constructor(private _httpClient: HttpClient, private _log: LoggerService) { }

  getArticles(filter?: ArticleFilter): Observable<Array<SpaceFLightArticle>> {
    filter = filter || {};
    filter.limit = filter.limit || 5;
    filter.offset = filter.offset || Math.floor(Math.random() * 30000);
    var params = (new HttpParams())
      .append('limit', filter.limit)
      .append('offset', filter.offset);
    if (filter.hasEvent) {
      params = params = params.append('has_event', filter.hasEvent);
    }
    if (filter.hasLaunch) {
      params = params = params.append('has_launch', filter.hasLaunch);
    }
    if (filter.isFeatured) {
      params = params = params.append('is_featured', filter.isFeatured);
    }
    this._log.debug('SpaceFlightNewsService.getArticles', filter, params);

    // TODO: test this to make sure the error handling works correctly.
    // we simply want to return an observable "empty" array if there is an error.
    return this._httpClient.get<ArticleResponse>(`${this._baseUrl}/articles`, { params })
      .pipe(
          map((response) => {
            return response.results;
          }), 
          catchError((err) => {
            this._log.error('Error fetching articles', err);
            return new BehaviorSubject<Array<SpaceFLightArticle>>([]).asObservable();
          })
    );
  }
}
