import { articleReducer } from '../components/articles/state/article.reducer';
import { ArticleState } from '../components/articles/state/article.state';
import { EmployeeState } from '../components/employee/store/employee-state';

export interface AppState {
  articles: ArticleState;
}

export const appReducer = {
  article: articleReducer,
};
