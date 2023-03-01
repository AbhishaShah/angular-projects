import { Article } from './article.model';

export interface ArticleState {
  articles: Article[];
}

export const initialState: ArticleState = {
  articles: [
    { title: 'About angular framework' },
    {
      title: 'About State Management',
    },
  ],
};
