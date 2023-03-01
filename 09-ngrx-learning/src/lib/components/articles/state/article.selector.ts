import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArticleState } from './article.state';

const ARTICLE_STATE_NAME = 'article';
const getArticlesState =
  createFeatureSelector<ArticleState>(ARTICLE_STATE_NAME);

export const getArticles = createSelector(getArticlesState, (state) => {
  return state.articles;
});
