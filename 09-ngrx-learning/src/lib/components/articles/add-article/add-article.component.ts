import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/lib/store/app.state';
import { addArticle } from '../state/article.actions';
import { Article } from '../state/article.model';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss'],
})
export class AddArticleComponent {
  value: string = '';
  constructor(private store: Store<AppState>) {}

  //The addArticle() function is responsible for dispatching new articles to the store.
  addArticle(articleName: string): void {
    const article = new Article();

    article.title = articleName;
    this.store.dispatch(addArticle({ article }));
    console.log(this);
    this.value = '';
  }
}
