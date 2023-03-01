import { createAction, props } from '@ngrx/store';
import { Article } from './article.model';

export const ADD_ARTICLE_ACTION = '[Article Component] add article';
export const DELETE_ARTICLE_ACTION = '[Article Component] delete article';

export const addArticle = createAction(
  ADD_ARTICLE_ACTION,
  props<{ article: Article }>()
);

export const deleteArticle = createAction(
  DELETE_ARTICLE_ACTION,
  props<{ id: string }>()
);
