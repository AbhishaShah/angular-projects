import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/lib/store/app.state';
import { Article } from '../state/article.model';
import { getArticles } from '../state/article.selector';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent implements OnInit {
  //There, we have set articles to a type of observable and subscribed to the store to get the articles.

  articles!: Observable<Article[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.articles = this.store.select(getArticles);
  }
}
