import { Action, createReducer, on } from '@ngrx/store';
import * as ArticleActions from './article.actions';

import { ArticleState, initialState } from './article.state';

export const articleReducer = createReducer(
  initialState,

  on(
    ArticleActions.addArticle,

    (state: ArticleState, { article }) => {
      return { ...state, articles: [...state.articles, article] };
    }
  )
);

export function reducer(state: ArticleState | undefined, action: Action): any {
  return articleReducer(state, action);
}
