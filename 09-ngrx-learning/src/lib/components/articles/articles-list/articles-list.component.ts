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
  articles!: Observable<Article[]>;
  //The above code shows the app.component.ts file of our example. There, we have set articles$ to a type of observable and subscribed to the store to get the articles. The addArticle() function is responsible for dispatching new articles to the store.

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.articles = this.store.select(getArticles);
  }
}
